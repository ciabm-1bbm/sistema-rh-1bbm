// ======================================================
// SISTEMA DE ALERTAS AVANÇADOS – 1º BBM
// ======================================================

function gerarAlertasCompletos(efetivo, escalaDB, mes, ano) {
  const alertas = {
    gerais: [],
    porPelotao: {},
    deficitCOV: [],
    desequilibrioHoras: [],
    guarnicoesIncompletas: []
  };

  // 1. ALERTAS POR PELOTÃO – EFETIVO DISPONÍVEL vs. NECESSÁRIO
  const pelotoes = [...new Set(efetivo.map(m => m.pelotao).filter(p => 
    !p.includes('AFAST') && !p.includes('SADM') && !p.includes('CIABM') && !p.includes('ADJUNTO')
  ))];
  
  pelotoes.forEach(pelotao => {
    const militaresPelotao = efetivo.filter(m => m.pelotao === pelotao && m.situacao === 'Ativo');
    const covsPelotao = militaresPelotao.filter(m => m.isCOV).length;
    const combatentes = militaresPelotao.filter(m => !m.isCOV && m.funcaoPadrao !== 'Oficial').length;
    
    // Necessidade mínima: 1 COV + 2 Combatentes por viatura (ABT + AR)
    const deficitCOV = covsPelotao < 2 ? 2 - covsPelotao : 0;
    const deficitCombatentes = combatentes < 4 ? 4 - combatentes : 0;
    
    if (deficitCOV > 0 || deficitCombatentes > 0) {
      alertas.porPelotao[pelotao] = {
        cor: deficitCOV > 0 ? '🔴' : '🟡',
        mensagem: `${deficitCOV > 0 ? `Faltam ${deficitCOV} COV(s)` : ''} ${deficitCombatentes > 0 ? `e ${deficitCombatentes} combatente(s)` : ''}`,
        covsDisponiveis: covsPelotao,
        combatentesDisponiveis: combatentes
      };
      
      alertas.gerais.push({
        tipo: 'deficit_efetivo',
        pelotao,
        gravidade: deficitCOV > 0 ? 'alta' : 'media',
        mensagem: `🟡 Pelotão ${pelotao}: ${deficitCOV > 0 ? `${deficitCOV} COV(s) insuficiente` : ''}`
      });
    }
  });

  // 2. DÉFICIT DE COV POR DIA (ESCALA)
  const diasComEscala = [...new Set(escalaDB.map(e => e.data))];
  
  diasComEscala.forEach(data => {
    const escalaDia = escalaDB.filter(e => e.data === data);
    const covsEscalados = escalaDia.filter(e => e.funcao === 'COV' || e.funcao === 'COV AEM').length;
    const viaturasNecessarias = 2; // ABT + AR por pelotão (ajustável)
    
    if (covsEscalados < viaturasNecessarias) {
      alertas.deficitCOV.push({
        data,
        covsEscalados,
        necessarios: viaturasNecessarias,
        deficit: viaturasNecessarias - covsEscalados,
        cor: '🔴'
      });
    }
  });

  // 3. DESEQUILÍBRIO DE HORAS (DEVENDO X EXTRAS)
  const horasPorMilitar = {};
  escalaDB.forEach(e => {
    if (!horasPorMilitar[e.idFunc]) horasPorMilitar[e.idFunc] = 0;
    horasPorMilitar[e.idFunc] += e.horas || 0;
  });

  Object.keys(horasPorMilitar).forEach(id => {
    const militar = efetivo.find(m => m.idFunc === id);
    if (!militar) return;
    
    const cargaObrigatoria = calcularCargaObrigatoria(mes, ano, 0); // Simplificado
    const horasTrab = horasPorMilitar[id];
    const saldo = horasTrab - cargaObrigatoria;
    
    if (saldo > 20) {
      alertas.desequilibrioHoras.push({
        idFunc: id,
        nome: militar.nomeGuerra,
        horasExtras: saldo.toFixed(1),
        gravidade: 'alta',
        cor: '🔴',
        mensagem: `🔴 ${militar.nomeGuerra} com ${saldo.toFixed(1)}h extras`
      });
    } else if (saldo < -10) {
      alertas.desequilibrioHoras.push({
        idFunc: id,
        nome: militar.nomeGuerra,
        horasDevendo: Math.abs(saldo).toFixed(1),
        gravidade: 'media',
        cor: '🟡',
        mensagem: `🟡 ${militar.nomeGuerra} deve ${Math.abs(saldo).toFixed(1)}h`
      });
    }
  });

  return alertas;
}

// Função para exibir alertas no dashboard
function exibirAlertasAvancados(alertas) {
  let html = '';
  
  // Alertas de déficit de COV
  if (alertas.deficitCOV.length > 0) {
    html += '<div class="alerta-vermelho" style="margin-bottom: 15px;">';
    html += '<strong>🔴 DÉFICIT DE COV NA ESCALA:</strong><ul>';
    alertas.deficitCOV.slice(0, 5).forEach(a => {
      html += `<li>${a.data}: ${a.covsEscalados} COV(s) para ${a.necessarios} necessários (faltam ${a.deficit})</li>`;
    });
    html += '</ul></div>';
  }
  
  // Alertas por pelotão
  Object.keys(alertas.porPelotao).forEach(pel => {
    const a = alertas.porPelotao[pel];
    html += `<div class="${a.cor === '🔴' ? 'alerta-vermelho' : 'alerta-amarelo'}" style="margin-bottom: 10px;">`;
    html += `<strong>${a.cor} Pelotão ${pel}:</strong> ${a.mensagem}`;
    html += ` (COVs: ${a.covsDisponiveis}, Combatentes: ${a.combatentesDisponiveis})`;
    html += '</div>';
  });
  
  // Desequilíbrio de horas
  if (alertas.desequilibrioHoras.length > 0) {
    html += '<div style="margin-top: 20px;"><strong>⚖️ DESEQUILÍBRIO DE HORAS:</strong></div>';
    alertas.desequilibrioHoras.slice(0, 10).forEach(a => {
      html += `<div class="${a.cor === '🔴' ? 'alerta-vermelho' : 'alerta-amarelo'}" style="margin-bottom: 5px;">`;
      html += `${a.cor} ${a.mensagem}`;
      html += '</div>';
    });
  }
  
  return html;
}