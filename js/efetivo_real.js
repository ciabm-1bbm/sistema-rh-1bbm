// ======================================================
// DADOS REAIS DO EFETIVO – 1º BBM (JANEIRO/2026)
// Fonte: Planilha "EFETIVO TOTAL 1º BBM"
// ======================================================

const efetivoReal = [
  // ========== OFICIAIS E COMANDO ==========
  { idFunc: "3527301", nomeCompleto: "THIAGO JOSÉ BONA DE SOUZA", nomeGuerra: "BONA", posto: "Cap", pelotao: "CMT CIA", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "2919109", nomeCompleto: "LUCAS BATISTA RIBEIRO", nomeGuerra: "LUCAS", posto: "Cap", pelotao: "CMT CIA", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4279310", nomeCompleto: "BETINA JUSTO MARTINS", nomeGuerra: "MARTINS", posto: "Cap", pelotao: "AFASTADO", 
    isCOV: true, isAEM: false, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 108.03, situacao: "Afastado", 
    observacoes: "CNH D, CURSO ABM, COV" },
  
  // ========== CIABM (ADMINISTRATIVO) ==========
  { idFunc: "3696790", nomeCompleto: "RODRIGO DA COSTA FREITAS", nomeGuerra: "DA COSTA", posto: "2º Sgt", pelotao: "CIABM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Auxiliar da CIA", valorHoraExtra: 74.42, situacao: "Ativo", 
    observacoes: "GV, FR², ETSP, AERÓDROMO" },
  
  { idFunc: "2822130", nomeCompleto: "GUSTAVO DA ROSA MEDEIROS", nomeGuerra: "MEDEIROS", posto: "Sd", pelotao: "CIABM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Auxiliar da CIA", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "ETSP" }, // VOCÊ ESTÁ AQUI! 🚒
  
  { idFunc: "3205614", nomeCompleto: "SIRIO LUIS HERMENEGILDO GOMES", nomeGuerra: "HERMENEGILDO", posto: "Sd", pelotao: "CIABM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Auxiliar da CIA", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "FR², ETSP" },
  
  { idFunc: "4672410", nomeCompleto: "FELIPE GARIBALDI E SOUZA", nomeGuerra: "GARIBALDI", posto: "Sd", pelotao: "CIABM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Auxiliar da CIA", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, ETSP" },
  
  // ========== SADM (SEÇÃO ADMINISTRATIVA) ==========
  { idFunc: "2262363", nomeCompleto: "ALTEMAR SOLISMAR BASTOS TERRA", nomeGuerra: "TERRA", posto: "1º TEN PME", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "2242583", nomeCompleto: "CÂNDIDO DE OLIVEIRA PERREIRA", nomeGuerra: "CÂNDIDO", posto: "1º TEN PME", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "3698653", nomeCompleto: "JÚLIA CAROLINE PORTZ DA ROCHA", nomeGuerra: "JÚLIA", posto: "2º Sgt", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 74.42, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "2891301", nomeCompleto: "JAIR JÚNIOR MACHADO FERREIRA", nomeGuerra: "FERREIRA", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SLOG", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4354737", nomeCompleto: "BRUNO ANTONIO DOS SANTOS FRONCKOWIAK", nomeGuerra: "BRUNO", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4551990", nomeCompleto: "ARAMIS CARLOS MUNDEL", nomeGuerra: "MUNDEL", posto: "Sd", pelotao: "SADM", 
    isCOV: true, isAEM: true, isADM: true, funcaoPadrao: "COV AEM", valorHoraExtra: 57.62, situacao: "Ativo", 
    observacoes: "COV AEM" },
  
  { idFunc: "4550757", nomeCompleto: "JOÃO ADALBERTO WESTPHALEN ALVES", nomeGuerra: "WESTPHALEN", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "FR², RESGAT" },
  
  { idFunc: "4782917", nomeCompleto: "NATHAN ROCHA DO NASCIMENTO", nomeGuerra: "NATHAN", posto: "Sd", pelotao: "SADM", 
    isCOV: true, isAEM: true, isADM: true, funcaoPadrao: "VIATURAS", valorHoraExtra: 57.62, situacao: "Ativo", 
    observacoes: "COV AEM, CNH D, COV" },
  
  { idFunc: "3718123", nomeCompleto: "LAHÍS TROIS SCHULTZ", nomeGuerra: "SCHULTZ", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "GV" },
  
  { idFunc: "4982924", nomeCompleto: "ISABELLI CECCON DA SILVA", nomeGuerra: "CECCON", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4981340", nomeCompleto: "BRUNA BARBOZA TORRES", nomeGuerra: "BRUNA", posto: "Sd", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "SADM", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4490541", nomeCompleto: "JOAN SPERLING SANTANA", nomeGuerra: "SPERLING", posto: "SD BMT", pelotao: "SADM", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "ALMOX", valorHoraExtra: 37.10, situacao: "Ativo", 
    observacoes: "AERÓDROMO" },
  
  // ========== ADJUNTO ==========
  { idFunc: "2267373", nomeCompleto: "LAÉRCIO DILMAR AGUIAR GAY", nomeGuerra: "DILMAR", posto: "1º TEN PME", pelotao: "ADJUNTO", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "2241951", nomeCompleto: "ADOLFO DONATO DA SILVA FILHO", nomeGuerra: "DONATO", posto: "1º TEN PME", pelotao: "ADJUNTO", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 0, situacao: "Ativo", 
    observacoes: "AERÓDROMO" },
  
  { idFunc: "2993996", nomeCompleto: "LUCIANO MELO ESPINOSA", nomeGuerra: "ESPINOSA", posto: "Sd", pelotao: "ADJUNTO", 
    isCOV: false, isAEM: false, isADM: true, funcaoPadrao: "ALMOX", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "AERÓDROMO" },
  
  // ========== AUTO RESGATE ==========
  { idFunc: "4356047", nomeCompleto: "JOÃO VIANEI FERNANDES MACHADO", nomeGuerra: "VIANEI", posto: "2º Sgt", pelotao: "AUTO RESGATE", 
    isCOV: true, isAEM: true, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 74.42, situacao: "Ativo", 
    observacoes: "GV, SEG GV, FR², ETSP, COV AEM, VEICULAR, RESGAT, CNH D, COV" },
  
  // ========== AFASTADOS ==========
  { idFunc: "2328828", nomeCompleto: "DOLISMAR JOAO FRANCO SILVEIRA", nomeGuerra: "FRANCO", posto: "1º Sgt", pelotao: "AFASTADO", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 79.22, situacao: "Afastado", observacoes: "" },
  
  { idFunc: "2423154", nomeCompleto: "EZEQUIEL SOBIESKI DA COSTA", nomeGuerra: "SOBIESKI", posto: "1º Sgt", pelotao: "AFASTADO", 
    isCOV: true, isAEM: false, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 79.22, situacao: "Afastado", observacoes: "CNH D, COV" },
  
  // ========== AEM (AUTO ESCADA MECÂNICA) ==========
  { idFunc: "2328798", nomeCompleto: "CAETANO RODOLFO PRADE OSÓRIO", nomeGuerra: "PRADE", posto: "1º TEN PME", pelotao: "AEM", 
    isCOV: true, isAEM: true, isADM: true, funcaoPadrao: "Oficial", valorHoraExtra: 108.03, situacao: "Ativo", 
    observacoes: "COV AEM" },
  
  { idFunc: "3696391", nomeCompleto: "ANDERSON BUENO BOTTINI", nomeGuerra: "BOTTINI", posto: "Sd", pelotao: "AEM", 
    isCOV: true, isAEM: true, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 57.62, situacao: "Ativo", 
    observacoes: "COV AEM, CNH D, SIM, COV" },
  
  // ========== AÇORIANOS (PELOTÃO OPERACIONAL) ==========
  { idFunc: "2285045", nomeCompleto: "JAIRO COSTA SILVEIRA", nomeGuerra: "JAIRO", posto: "1º TEN PME", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Oficial", valorHoraExtra: 108.03, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "2879620", nomeCompleto: "FLÁVIO CONTER CORRÊA", nomeGuerra: "FLÁVIO", posto: "1º Sgt", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 79.22, situacao: "Ativo", observacoes: "ETSP" },
  
  { idFunc: "2328925", nomeCompleto: "LEONI DELAVECHIA DE LIMA", nomeGuerra: "DELAVECHIA", posto: "1º Sgt", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 79.22, situacao: "Ativo", 
    observacoes: "AERÓDROMO" },
  
  { idFunc: "2262290", nomeCompleto: "ANTONIO RICARDO ARAGÃO MARQUES", nomeGuerra: "ARAGÃO", posto: "1º Sgt PME", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 79.22, situacao: "Ativo", observacoes: "GV" },
  
  { idFunc: "3696715", nomeCompleto: "ALBERTO BALBINOT KANOFRE", nomeGuerra: "KANOFRE", posto: "2º Sgt", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 74.42, situacao: "Ativo", observacoes: "FR²" },
  
  { idFunc: "4279808", nomeCompleto: "VOLNEI GUIMARÃES", nomeGuerra: "GUIMARÃES", posto: "2º Sgt", pelotao: "AÇORIANOS", 
    isCOV: true, isAEM: true, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 74.42, situacao: "Ativo", 
    observacoes: "GV, COV AEM, CNH D, COV" },
  
  { idFunc: "2810727", nomeCompleto: "GILBERTO HOFFMANN DOS SANTOS", nomeGuerra: "HOFFMANN", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: true, isAEM: false, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 46.37, situacao: "Afastado", 
    observacoes: "CNH D, SIM, COV" },
  
  { idFunc: "3150631", nomeCompleto: "ESEQUIEL NUNES DOS SANTOS", nomeGuerra: "ESEQUIEL", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Afastado", observacoes: "" },
  
  { idFunc: "3164071", nomeCompleto: "VINICIUS DE ALMEIDA BITTENCOURT DA SILVA", nomeGuerra: "VINÍCIUS", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: true, isAEM: true, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 57.62, situacao: "Ativo", 
    observacoes: "COV AEM" },
  
  { idFunc: "3696944", nomeCompleto: "RAFAEL LAGO", nomeGuerra: "LAGO", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: true, isAEM: false, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, SEG GV, FR², ETSP, CNH D, SIM, COV" },
  
  { idFunc: "4289102", nomeCompleto: "ALISSON SALDANHA ANTUNES", nomeGuerra: "ALISSON", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, ETSP" },
  
  { idFunc: "4387759", nomeCompleto: "JULIAN DUARTE SOARES", nomeGuerra: "JULIAN", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "3872319", nomeCompleto: "ALESSANDRO MACHADO RODRIGUES", nomeGuerra: "ALESSANDRO", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, SEG GV" },
  
  { idFunc: "4387767", nomeCompleto: "VINICIUS IBALDO GOULARTE", nomeGuerra: "IBALDO", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "VEICULAR" },
  
  { idFunc: "4626290", nomeCompleto: "MAURÍCIO LOPES DORES", nomeGuerra: "MAURÍCIO", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, CSALT" },
  
  { idFunc: "4782534", nomeCompleto: "SAMUEL ASSUNÇÃO ANDRADE", nomeGuerra: "ASSUNÇÃO", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", 
    observacoes: "GV, CSALT" },
  
  { idFunc: "4843673", nomeCompleto: "FELIPE DA SILVEIRA TEIXEIRA", nomeGuerra: "TEIXEIRA", posto: "Sd", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 46.37, situacao: "Ativo", observacoes: "" },
  
  { idFunc: "4490193", nomeCompleto: "LEONARDO CORREA CALDEIRA", nomeGuerra: "CORREA", posto: "SD BMT", pelotao: "AÇORIANOS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 37.10, situacao: "Ativo", 
    observacoes: "AERÓDROMO" },
  
  { idFunc: "4490266", nomeCompleto: "ELTON PAULINO DA SILVA", nomeGuerra: "PAULINO", posto: "SD BMT", pelotao: "AÇORIANOS", 
    isCOV: true, isAEM: false, isADM: false, funcaoPadrao: "COV", valorHoraExtra: 37.10, situacao: "Ativo", 
    observacoes: "CNH D, SIM, COV" },
  
  // ========== TERESÓPOLIS ==========
  { idFunc: "2423219", nomeCompleto: "RAFAEL VIEIRA CABRAL", nomeGuerra: "VIEIRA", posto: "1º Ten", pelotao: "CMT PELOTÃO", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Oficial", valorHoraExtra: 108.03, situacao: "Ativo", 
    observacoes: "GV, FR², ETSP, CNH D" },
  
  { idFunc: "2414066", nomeCompleto: "LUCIANO FERREIRA PEREIRA", nomeGuerra: "LUCIANO", posto: "1º Sgt", pelotao: "TERESOPOLIS", 
    isCOV: false, isAEM: false, isADM: false, funcaoPadrao: "Combatente", valorHoraExtra: 79.22, situacao: "Ativo", 
    observacoes: "AERÓDROMO, CNH D" }
  // ... CONTINUE A PARTIR DAQUI COM O RESTO DO EFETIVO
];

// ========== EXPORTAÇÃO ==========
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { efetivoReal };
}