// ========== SISTEMA RH 1º BBM ==========
// MÓDULO DE CÁLCULOS – HE, GSE, ETAPAS, FC
// ========================================

// Converte o turno em horas trabalhadas
function calcularHorasPorTurno(turnoString) {
  if (!turnoString) return 0;
  
  // Turno pode ser "2,3,4" ou "2,3" ou "1" etc.
  const turnos = turnoString.split(',').map(Number);
  let horas = 0;
  
  turnos.forEach(t => {
    if (t === 1 || t === 2 || t === 3 || t === 4) horas += 6;
  });
  
  return horas;
}

// Calcula carga horária obrigatória do mês (dias do mês - dias indisponíveis) * 5.7
function calcularCargaObrigatoria(mes, ano, diasIndisponiveis = 0) {
  const diasNoMes = new Date(ano, mes, 0).getDate();
  let cargaBase = 0;
  
  if (diasNoMes === 28) cargaBase = 160;
  else if (diasNoMes === 29) cargaBase = 165;
  else if (diasNoMes === 30) cargaBase = 171;
  else if (diasNoMes === 31) cargaBase = 177;
  
  return cargaBase - (diasIndisponiveis * 5.7);
}

// Calcula HE de um militar no mês
function calcularHEMilitar(idFunc, escalaDB, diasIndisponiveis = 0, mes = 1, ano = 2026) {
  // Filtrar escala do militar
  const escalaMilitar = escalaDB.filter(e => e.idFunc === idFunc);
  
  // Somar horas trabalhadas
  let horasTrabalhadas = 0;
  escalaMilitar.forEach(e => {
    horasTrabalhadas += e.horas || 0;
  });
  
  // Carga obrigatória
  const cargaObrigatoria = calcularCargaObrigatoria(mes, ano, diasIndisponiveis);
  
  // HE = horasTrabalhadas - cargaObrigatoria (se positivo)
  const he = Math.max(0, horasTrabalhadas - cargaObrigatoria);
  
  return {
    idFunc,
    horasTrabalhadas,
    cargaObrigatoria,
    he,
    horasTrabalhadasFormat: horasTrabalhadas.toFixed(1),
    heFormat: he.toFixed(1)
  };
}

// Calcula etapas de alimentação (regra: a cada 6h trabalhadas no DIA, 1 etapa)
function calcularEtapasMilitar(idFunc, escalaDB) {
  // Agrupar por data
  const escalaPorDia = {};
  
  escalaDB.filter(e => e.idFunc === idFunc).forEach(e => {
    if (!escalaPorDia[e.data]) {
      escalaPorDia[e.data] = 0;
    }
    escalaPorDia[e.data] += e.horas || 0;
  });
  
  let totalEtapas = 0;
  
  Object.keys(escalaPorDia).forEach(data => {
    const horasDia = escalaPorDia[data];
    const etapasDia = Math.floor(horasDia / 6);
    totalEtapas += etapasDia;
  });
  
  return totalEtapas;
}

// Calcula TODAS as HE, GSE e etapas do mês
function calcularTodasHE(escalaDB, efetivo, parametros) {
  let totalHE = 0;
  let totalGSE = 0;
  let totalEtapas = 0;
  let totalValorEtapas = 0;
  
  // Agrupar por militar
  const militaresNaEscala = [...new Set(escalaDB.map(e => e.idFunc))];
  
  militaresNaEscala.forEach(id => {
    const militar = efetivo.find(m => m.idFunc === id);
    if (!militar) return;
    
    const heCalc = calcularHEMilitar(id, escalaDB, 0, 1, 2026);
    const heHoras = heCalc.he;
    const valorHE = heHoras * (militar.valorHoraExtra || 0);
    
    const etapas = calcularEtapasMilitar(id, escalaDB);
    const valorEtapas = etapas * (parametros.valorEtapa || 12.79);
    
    totalHE += heHoras;
    totalGSE += valorHE;
    totalEtapas += etapas;
    totalValorEtapas += valorEtapas;
  });
  
  return {
    totalHE: totalHE.toFixed(1),
    totalGSE: totalGSE,
    totalEtapas: totalEtapas,
    totalValorEtapas: totalValorEtapas
  };
}

// Calcular saldo de Folga Compensatória (FC)
function calcularSaldoFC(militarId, mesReferencia) {
  // Função simplificada – pode ser expandida
  const fcDB = JSON.parse(localStorage.getItem('fc_1bbm')) || {};
  return fcDB[militarId] || 0;
}

// Registrar uso de FC
function registrarFC(militarId, horas, mes) {
  const fcDB = JSON.parse(localStorage.getItem('fc_1bbm')) || {};
  if (!fcDB[militarId]) fcDB[militarId] = 0;
  fcDB[militarId] -= horas;
  localStorage.setItem('fc_1bbm', JSON.stringify(fcDB));
}