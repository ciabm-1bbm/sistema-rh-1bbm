// ========== SISTEMA RH 1º BBM ==========
// MÓDULO DE GERAÇÃO DE PDF – ANEXOS A, B, C, G, H, I
// ========================================

function gerarPDFanexoA() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text('ANEXO A – MAPA DE PAGAMENTO DE GSE', 20, 20);
  doc.setFontSize(12);
  doc.text('1º Batalhão de Bombeiro Militar – CBMRS', 20, 30);
  doc.text('Mês de referência: JANEIRO/2026', 20, 40);
  
  // Dados de exemplo (depois pode puxar do resultado)
  const resultado = JSON.parse(localStorage.getItem('resultado_he')) || { totalHE: 0, totalGSE: 0 };
  
  doc.text(`Total de Horas Extras: ${resultado.totalHE}h`, 20, 60);
  doc.text(`Valor Total GSE: R$ ${resultado.totalGSE.toFixed(2)}`, 20, 70);
  
  doc.text('__________________________________________________', 20, 100);
  doc.text('Atesto a legalidade da despesa. Proceda-se o pagamento.', 20, 110);
  doc.text('Porto Alegre, RS, ______ de ________________ de 2026.', 20, 130);
  doc.text('__________________________________________________', 20, 150);
  doc.text('[Nome do Comandante] – Ten Cel QOEM', 20, 160);
  doc.text('Comandante do 1º BBM', 20, 170);
  
  doc.save('anexo_A_GSE_JANEIRO_2026.pdf');
}

function gerarPDFanexoB() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text('ANEXO B – MAPA DE ESCALA DE SERVIÇO EXECUTADA', 20, 20);
  doc.text('1º Batalhão de Bombeiro Militar – JANEIRO/2026', 20, 30);
  
  // Puxar escala do localStorage
  const escalaDB = JSON.parse(localStorage.getItem('escala_1bbm')) || [];
  let y = 50;
  
  doc.setFontSize(10);
  doc.text('Data       | Militar     | Posto | Função | Turno | Horas', 20, y);
  y += 5;
  
  escalaDB.slice(0, 15).forEach(e => {
    doc.text(`${e.data} | ${e.nome} | ${e.posto} | ${e.funcao} | ${e.turno} | ${e.horas}h`, 20, y);
    y += 5;
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });
  
  doc.save('anexo_B_ESCALA_JANEIRO_2026.pdf');
}

function gerarPDFanexoC() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('ANEXO C – EXTRATO DEMONSTRATIVO DE CARGA HORÁRIA', 20, 20);
  doc.text('Funcionalidade em desenvolvimento – versão beta.', 20, 50);
  doc.save('anexo_C_EXTRATO_JANEIRO_2026.pdf');
}

function gerarPDFanexoG() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('ANEXO G – MAPA DE SAQUE DE ETAPAS DE ALIMENTAÇÃO', 20, 20);
  doc.text('Funcionalidade em desenvolvimento – versão beta.', 20, 50);
  doc.save('anexo_G_ETAPAS_JANEIRO_2026.pdf');
}

function gerarPDFanexoH() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('ANEXO H – MAPA DE INDISPONIBILIDADE', 20, 20);
  doc.text('Funcionalidade em desenvolvimento – versão beta.', 20, 50);
  doc.save('anexo_H_INDISPONIBILIDADES_JANEIRO_2026.pdf');
}

function gerarPDFanexoI() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('ANEXO I – JUSTIFICATIVAS PARA EXTENSÃO DE JORNADA', 20, 20);
  
  const justificativas = parametros.justificativas || [];
  let y = 40;
  
  justificativas.forEach((j, idx) => {
    doc.text(`${idx+1}. ${j}`, 20, y);
    y += 10;
  });
  
  doc.save('anexo_I_JUSTIFICATIVAS_JANEIRO_2026.pdf');
}