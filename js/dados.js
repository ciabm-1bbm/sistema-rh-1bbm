// ========== SISTEMA RH 1º BBM ==========
// BASE DE DADOS DO EFETIVO (JSON LOCAL)

const efetivo = [
  {
    idFunc: "12345",
    nomeCompleto: "João Silva",
    nomeGuerra: "Silva",
    posto: "Sd",
    pelotao: "1º Pel",
    isCOV: true,
    isAEM: false,
    isADM: false,
    funcaoPadrao: "COV",
    valorHoraExtra: 46.37,
    situacao: "Ativo",
    observacoes: ""
  },
  {
    idFunc: "12346",
    nomeCompleto: "Pedro Santos",
    nomeGuerra: "Pedro",
    posto: "Sd",
    pelotao: "1º Pel",
    isCOV: false,
    isAEM: false,
    isADM: true,
    funcaoPadrao: "Combatente",
    valorHoraExtra: 46.37,
    situacao: "Ativo",
    observacoes: "ADM"
  },
  {
    idFunc: "12347",
    nomeCompleto: "Carlos Lima",
    nomeGuerra: "Lima",
    posto: "1º Sgt",
    pelotao: "2º Pel",
    isCOV: true,
    isAEM: true,
    isADM: false,
    funcaoPadrao: "COV AEM",
    valorHoraExtra: 79.22,
    situacao: "Ativo",
    observacoes: ""
  },
  {
    idFunc: "12348",
    nomeCompleto: "Ana Costa",
    nomeGuerra: "Ana",
    posto: "Sd",
    pelotao: "2º Pel",
    isCOV: false,
    isAEM: false,
    isADM: false,
    funcaoPadrao: "Combatente",
    valorHoraExtra: 46.37,
    situacao: "Op Verão",
    observacoes: "Até 31/01"
  },
  {
    idFunc: "12349",
    nomeCompleto: "José Souza",
    nomeGuerra: "Zé",
    posto: "2º Sgt",
    pelotao: "3º Pel",
    isCOV: true,
    isAEM: false,
    isADM: false,
    funcaoPadrao: "COV",
    valorHoraExtra: 74.42,
    situacao: "Férias",
    observacoes: "10 a 30/01"
  },
  {
    idFunc: "12350",
    nomeCompleto: "Márcio Dias",
    nomeGuerra: "Márcio",
    posto: "Sd",
    pelotao: "3º Pel",
    isCOV: false,
    isAEM: false,
    isADM: false,
    funcaoPadrao: "Combatente",
    valorHoraExtra: 46.37,
    situacao: "Ativo",
    observacoes: ""
  }
];

// ========== PARÂMETROS DO SISTEMA ==========
const parametros = {
  cotaGSE: 299234.47,
  valorEtapa: 12.79,
  cargaHoraria: {
    28: 160,
    29: 165,
    30: 171,
    31: 177
  },
  horasPorDiaIndisponivel: 5.7,
  justificativas: [
    "Atender situações excepcionais e temporárias",
    "Imperiosa necessidade de serviço - atividade fim",
    "Manter normalidade dos serviços",
    "Dar curso a ocorrências já iniciadas",
    "Situações imprevistas - vida/segurança pública"
  ]
};

// ========== FUNÇÕES DE ACESSO ==========
function buscarMilitarPorID(id) {
  return efetivo.find(m => m.idFunc === id) || null;
}

function listarMilitaresPorPelotao(pelotao) {
  return efetivo.filter(m => m.pelotao === pelotao);
}

function listarCOVsDisponiveis() {
  return efetivo.filter(m => m.isCOV === true && m.situacao === "Ativo");
}

// Exportar para usar em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { efetivo, parametros, buscarMilitarPorID };
}