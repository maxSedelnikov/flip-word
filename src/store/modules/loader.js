import mutations from "../mutations";

const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    showLoader: false,
  },
  getters: {
    showLoader: ({ showLoader }) => showLoader,
  },
  mutations: {
    [TOGGLE_LOADER](state, boolean) {
      state.showLoader = boolean;
    },
  },
  actions: {
    toggleLoader({ commit }, boolean) {
      commit("TOGGLE_LOADER", boolean);
    },
  },
};

export default loaderStore;
