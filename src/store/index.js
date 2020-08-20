import Vue from "vue";
import Vuex from "vuex";
import words from "./modules/words";
import loader from "./modules/loader";
import notify from "./modules/notifications";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    words,
    loader,
    notify,
  },
});

store.dispatch("initWordsStore");

export default store;
