export const receiptsModule = {
  namespaced: true,
  state: () => ({
    receipts: [],
    isDataLoading: false,
    selectedOption: "",
    searchQuery: "",
    limit: 10,
    totalRecipts: 0,
    stopLoadByScroll: false,
    sortingOptions: [
      {
        value: "name",
        name: "by name",
      },
      {
        value: "id",
        name: "by id",
      },
    ],
  }),
  getters: {
    sortedReceipts(state) {
      return [...state.receipts].sort((a, b) => {
        if (
          typeof a[state.selectedOption] === "string" &&
          typeof b[state.selectedOption] === "string"
        ) {
          return a[state.selectedOption].localeCompare(b[state.selectedOption]);
        } else if (
          typeof a[state.selectedOption] === "number" &&
          typeof b[state.selectedOption] === "number"
        ) {
          return a[state.selectedOption] - b[state.selectedOption];
        } else {
          return 0;
        }
      });
    },
    sortedAndSearched(state, getters) {
      return getters.sortedReceipts.filter((receipt) =>
        receipt.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    getReceiptById: (state) => (id) => {
      return state.receipts.find(
        (receipt) => Number(receipt.id) === Number(id)
      );
    },
    getFavoritesRecipts: (state) => {
      return state.receipts.filter((receipt) => receipt.isFavorite);
    },
  },
  mutations: {
    setReceipts(state, receipts) {
      state.receipts = receipts;
    },
    setIsDataLoading(state, flag) {
      state.isDataLoading = flag;
    },
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
    setTotalRecipts(state, totalRecipts) {
      state.totalRecipts = totalRecipts;
    },
    setStopLoadByScroll(state, flag) {
      state.stopLoadByScroll = flag;
    },
    addReceipt(state, receipt) {
      state.receipts = [...state.receipts, receipt];
    },
    deleteReceipt(state, id) {
      state.receipts = state.receipts.filter((receipt) => receipt.id !== id);
    },
    toggleFavorite(state, payload) {
      const itemIndex = state.receipts.findIndex(
        (receipt) => Number(receipt.id) === Number(payload.id)
      );
      if (itemIndex >= 0) {
        state.receipts[itemIndex].isFavorite =
          !state.receipts[itemIndex].isFavorite;
      }
    },
  },
  actions: {
    async fetchReceipts({ state, commit }) {
      try {
        commit("setIsDataLoading", true);
        const response = await fetch(
          `https://dummyjson.com/recipes?skip=${state.receipts.length}&limit=${state.limit}`
        );
        const data = await response.json();
        const { recipes, total } = data;
        const formatedRecipes = recipes.map((recipe) => ({
          ...recipe,
          isFavorite: false,
        }));
        const receipts = [...state.receipts, ...formatedRecipes];

        commit("setReceipts", receipts);
        commit("setTotalRecipts", Number(total));
      } catch (error) {
        console.log(error);
      } finally {
        commit("setIsDataLoading", false);
      }
    },
  },
};
