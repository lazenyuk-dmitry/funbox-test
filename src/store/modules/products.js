export default {
  namespaced: true,
  state: () => ({
    list: [
      {
        id: 1,
        supTitle: {
          default: "Сказочное заморское яство",
          active: "Котэ не одобряет?",
        },
        brand: "Нямушка",
        taste: "с фуа-гра",
        count: 10,
        gift: "мышь в подарок",
        desc: {
          default: "Чего сидишь? Порадуй котэ",
          selected: "Печень утки разварная с артишоками.",
        },
        weight: {
          value: 0.5,
          units: "кг",
        },
        isAvailable: true,
        isActive: false,
      },
      {
        id: 2,
        supTitle: {
          default: "Сказочное заморское яство",
          active: "Котэ не одобряет?",
        },
        brand: "Нямушка",
        taste: "с рыбой",
        count: 40,
        gift: "2 мыши в подарок",
        desc: {
          default: "Чего сидишь? Порадуй котэ",
          selected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        },
        weight: {
          value: 2,
          units: "кг",
        },
        isAvailable: true,
        isActive: false,
      },
      {
        id: 3,
        supTitle: {
          default: "Сказочное заморское яство",
          active: "Котэ не одобряет?",
        },
        brand: "Нямушка",
        taste: "с курой",
        count: 100,
        gift: "5 мышей в подарок",
        info: "заказчик доволен",
        desc: {
          default: "Чего сидишь? Порадуй котэ",
          selected: "Филе из цыплят с трюфелями в бульоне.",
        },
        weight: {
          value: 5,
          units: "кг",
        },
        isAvailable: false,
        isActive: false,
      },
    ],
  }),
  getters: {
    getProductsList(state) {
      return state.list;
    },
  },
  mutations: {
    setProductActiveStatus(state, product) {
      state.list.forEach((item) => {
        if (item.id === product.id) {
          item.isActive = product.isActive;
        }
      });
    },
  },
  actions: {
    setProductActiveStatus({ commit }, product) {
      commit("setProductActiveStatus", product);
    },
  },
};
