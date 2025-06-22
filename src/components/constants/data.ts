

import { IBudgetProjectDetails, IProjectCard } from "@/interfaces/ProjectsInterface";

export const projects: IProjectCard[] = [
  {
    projectId: "1",
    projectLogo: "/assets/meutrampo/logo.png",
    name: "Meu Trampo",
    progressValue: 50,
    accentColor: "#FFDD00",
    secondAccentColor: "#033745",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
  {
    projectId: "2",
    projectLogo:
      "https://backend.agenciabesouro.com.br/uploads/Logo_Gerdau_43d3794c91.png",
    name: "Gerdau Transforma",
    progressValue: 75,
    accentColor: "#FF0000",
    secondAccentColor: "#033745",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
  {
    projectId: "3",
    projectLogo: "/assets/avancamulher/logo.png",
    name: "Avança Mulher empreendedora",
    progressValue: 65,
    accentColor: "[#5B2D87]",
    secondAccentColor: "#ff85e5",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
  {
    projectId: "4",
    projectLogo: null,
    name: "NIYED",
    progressValue: 80,
    accentColor: "#2196F3",
    secondAccentColor: "white",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
  {
    projectId: "5",
    projectLogo: null,
    name: "Mulheres Transformam",
    progressValue: 45,
    accentColor: "#FF9800",
    secondAccentColor: "white",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
  {
    projectId: "6",
    projectLogo: null,
    name: "Circuito Empreenda + CDL e SEDEC",
    progressValue: 90,
    accentColor: "#3F51B5",
    secondAccentColor: "white",
    values: {
      subscribers: 5000,
      incubateds: 9000,
    },
  },
];

export const projectsBudgets: IProjectCard[] = [
    {
      projectId: "1",
      projectLogo: "/assets/meutrampo/logo.png",
      name: "Meu Trampo",
      progressValue: 50,
      accentColor: "#FFDD00",
      secondAccentColor: "#033745",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
    {
      projectId: "2",
      projectLogo:
        "https://backend.agenciabesouro.com.br/uploads/Logo_Gerdau_43d3794c91.png",
      name: "Gerdau Transforma",
      progressValue: 75,
      accentColor: "#FF0000",
      secondAccentColor: "#033745",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
    {
      projectId: "3",
      projectLogo: "/assets/avancamulher/logo.png",
      name: "Avança Mulher empreendedora",
      progressValue: 65,
      accentColor: "#5B2D87",
      secondAccentColor: "#ff85e5",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
    {
      projectId: "4",
      projectLogo: null,
      name: "NIYED",
      progressValue: 80,
      accentColor: "#2196F3",
      secondAccentColor: "white",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
    {
      projectId: "5",
      projectLogo: null,
      name: "Mulheres Transformam",
      progressValue: 45,
      accentColor: "#FF9800",
      secondAccentColor: "white",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
    {
      projectId: "6",
      projectLogo: null,
      name: "Circuito Empreenda + CDL e SEDEC",
      progressValue: 90,
      accentColor: "#3F51B5",
      secondAccentColor: "white",
      values: {
        budget: 5000,
        amountSpent: 9000,
      },
    },
  ];

  const totalExpenses = 50000;
  const mensalValues = [
    2000, 3100, 4000, 4100, 4000, 3600, 3200, 2300, 1400, 800, 500, 200,
  ];

  const monthValues = [
    { month: "Janeiro", value: "" },
    { month: "Fevereiro", value: "" },
    { month: "Março", value: "" },
    { month: "Abril", value: "" },
    { month: "Maio", value: "" },
    { month: "Junho", value: "" },
    { month: "Julho", value: "" },
    { month: "Agosto", value: "" },
    { month: "Setembro", value: "" },
    { month: "Outubro", value: "" },
    { month: "Novembro", value: "" },
    { month: "Dezembro", value: "" },
  ].map((item, index) => ({
    ...item,
    value: `R$ ${mensalValues[index].toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })}`,
  }));

  // porcentagem baseada no valor total
  const percentualExpense = mensalValues.map(
    (value) => (value / totalExpenses) * 100
  );

  // total dos valores gastos
  const totalAmountSpent = mensalValues.reduce((acc, valor) => acc + valor, 0);

  // porcentagem baseada no total dos valores gastos
  const totalPercent = (totalAmountSpent / totalExpenses) * 100;

  // dados simulando api
  export const chartData: IBudgetProjectDetails = {
    totalExpenses: totalExpenses,
    mensalValues: mensalValues,
    percentualExpenses: percentualExpense,
    totalAmount: totalAmountSpent,
    totalPercent: totalPercent,
    color: '#000',
    monthValues: monthValues,
  };
  
export const zones = [
  // Criando valores estáticos de zonas
  { label: "Norte", value: "NORTH" },
  { label: "Sul", value: "SOUTH" },
  { label: "Leste", value: "EAST" },
  { label: "Oeste", value: "WEST" },
  { label: "Centro", value: "CENTER" },
];


export const roles = [
  // Criando valores estáticos de profissões
  { label: "Gerente", value: "MANAGER" },
  { label: "Estudante", value: "STUDENT" },
  { label: "Usuário", value: "USER" },
  { label: "Funcionário", value: "EMPLOYEE" },
  { label: "Convidado", value: "GUEST" },
  { label: "Administrador", value: "ADMIN" },
  { label: "Cliente", value: "CUSTOMER" },
];

export const genders = [
  // Criando valores estáticos de gêneros
  { label: "Masculino", value: "MALE" },
  { label: "Feminino", value: "FEMALE" },
  { label: "Outro", value: "OTHER" },
];

export const ethnicities = [
  // Criando valores estáticos de etinias
  { label: "Preto", value: "BLACK" },
  { label: "Pardo", value: "BROWN" },
  { label: "Amarelo", value: "YELLOW" },
  { label: "Branco", value: "WHITE" },
  { label: "Indígena", value: "INDIGENOUS" },
];

export const sectors = [
  // Criando valores estáticos de setores
  { label: "Financeiro", value: "FINANCE" },
  { label: "Comunicação", value: "COMMUNICATION" },
  { label: "Pedagógico", value: "PEDAGOCIGAL" },
  { label: "Contabilidade", value: "ACCOUNTABILITY" },
  { label: "Projetos", value: "PROJECTS" },
  { label: "Recursos Humanos", value: "HUMAN_RESOURCES" },
  { label: "Relações com o Aluno", value: "STUDENT_RELATIONS" },
  { label: "Relações com o Mercado", value: "MARKET_RELATIONS" },
  { label: "Relações com Parceiros", value: "PARTNER_RELATIONS" },
  { label: "Tecnologia da Informação", value: "IT" },
  { label: "Filiais", value: "BRANCHES" },
  { label: "Conselho Executivo", value: "EXECUTIVE_COUNCIL" },
  { label: "Jurídico Especial", value: "SPECIAL_LEGAL" },
  { label: "Secretaria Executiva", value: "EXECUTIVE_SECRETARY" },
  { label: "Convidado", value: "GUEST" },
];