// src/datas/menuItems.js
export const MENU_ITEMS = [
  // -------------------------
  // PRATOS (inclui saladas e pratos da coluna "pratos" da imagem)
  // -------------------------
  {
    id: 1,
    name: "Salada Manda",
    desc: "Frango grelhado com mix de folhas, tomate, cenoura, palmito, manga, croutons e parmesão.",
    price: 48,
    category: "Pratos",
  },
  {
    id: 2,
    name: "Salada de Grãos",
    desc: "Mix de folhas frescas, grão de bico, arroz negro, vermelho, integral, parboilizado integral, lentilha, semente de girassol, linhaça, quinoa, gergelim, cebola roxa, salsinha tomate italiano e queijo gorgonzola.",
    price: 48,
    category: "Pratos",
  },
  {
    id: 3,
    name: "Filé de Frango Grelhado",
    desc: "Com creme de milho, arroz e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 48,
    category: "Pratos",
  },
  {
    id: 4,
    name: "Filé Mignon",
    desc: "Carne mignon grelhado, arroz, feijão, batata frita e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 66,
    category: "Pratos",
  },
  {
    id: 5,
    name: "Saint Peter Empanado",
    desc: "Com purê de abóbora, arroz e legumes salteados.",
    price: 60,
    category: "Pratos",
  },
  {
    id: 6,
    name: "Strogonoff de Frango",
    desc: "Frango ao molho cremoso, acompanhado de arroz e batata frita.",
    price: 48,
    category: "Pratos",
  },
  {
    id: 7,
    name: "Strogonoff de Mignon",
    desc: "Carne mignon ao molho cremoso, com arroz e batata frita.",
    price: 57,
    category: "Pratos",
  },
  {
    id: 8,
    name: "Strogonoff de Cogumelos",
    desc: "Cogumelos paris e shimeji ao molho cremoso, arroz e batata frita.",
    price: 52,
    category: "Pratos",
  },
  {
    id: 9,
    name: "Moqueca de Pupunha",
    desc: "Pupunha no molho de moqueca, arroz, farofa e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 52,
    category: "Pratos",
  },

  // -------------------------
  // MASSAS (coluna da direita da imagem)
  // -------------------------
  {
    id: 10,
    name: "Raviolloni",
    desc: "Massa verde recheada com mussarela de búfala, ao sugo artesanal, manjericão e queijo parmesão.",
    price: 65,
    category: "Massas",
  },
  {
    id: 11,
    name: "Linguine à Bolonhesa",
    desc: "Linguine com tradicional molho à bolonhesa com queijo parmesão.",
    price: 52,
    category: "Massas",
  },
  {
    id: 12,
    name: "Linguine 3 Queijos",
    desc: "Linguine com molho cremoso de 3 queijos e queijo parmesão.",
    price: 52,
    category: "Massas",
  },
  {
    id: 13,
    name: "Linguine ao Sugo",
    desc: "Massa ao molho sugo, finalizado com queijo parmesão.",
    price: 47,
    category: "Massas",
  },

  // -------------------------
  // OUTROS (coluna da direita da imagem)
  // -------------------------
  {
    id: 14,
    name: "Omelete com Salada",
    desc: "Omelete com queijo, presunto, tomate e salsinha e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 38,
    category: "Outros",
  },
  {
    id: 15,
    name: "Kibe de Carne",
    desc: "Com cebolas caramelizadas, servido com arroz e salada fresca.",
    price: 48,
    category: "Outros",
  },
  {
    id: 16,
    name: "Kibe de Abóbora",
    desc: "Kibe vegano de abóbora com amêndoas, arroz e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 48,
    category: "Outros",
  },

  // -------------------------
  // VEGANO (para aparecer no filtro)
  // Obs: conforme a legenda da imagem, os itens veganos são:
  // - Strogonoff de Cogumelos
  // - Kibe de Abóbora
  // -------------------------
  {
    id: 21,
    name: "Strogonoff de Cogumelos",
    desc: "Cogumelos paris e shimeji ao molho cremoso, arroz e batata frita.",
    price: 52,
    category: "Vegano",
  },
  {
    id: 22,
    name: "Kibe de Abóbora",
    desc: "Kibe vegano de abóbora com amêndoas, arroz e salada (mix de folhas, tomate, pepino e cenoura).",
    price: 48,
    category: "Vegano",
  },

  // -------------------------
  // ADICIONAIS (aos pratos a la carte)
  // -------------------------
  {
    id: 17,
    name: "Filé Mignon (a la carte)",
    desc: "",
    price: 25,
    category: "Adicionais",
  },
  {
    id: 18,
    name: "Frango (a la carte)",
    desc: "",
    price: 18,
    category: "Adicionais",
  },
  {
    id: 19,
    name: "Saint Peter (a la carte)",
    desc: "",
    price: 25,
    category: "Adicionais",
  },
  {
    id: 20,
    name: "Arroz ou Feijão (a la carte)",
    desc: "",
    price: 10,
    category: "Adicionais",
  },
];
