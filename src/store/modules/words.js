import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function normalizeResponse(word, translation) {
  word.id = Math.random()
    .toString(36)
    .substr(2, 9);
  word.translation = translation.translations[0].text;

  return word;
}

const {
  WORDS,
  NEXT_WORD,
  PREV_WORD,
  TOOGLE_ALLOW_SWITCHING,
  SET_CURRENT_INDEX,
} = mutations;

const wordsStore = {
  namespaced: true,
  state: {
    words: [],
    currentIndex: 0,
    allowFetchingNext: true,
  },
  getters: {
    wordsList: ({ words }) => words,
    currentIndex: ({ currentIndex }) => currentIndex,
    allowFetchingNext: ({ allowFetchingNext }) => allowFetchingNext,
  },
  mutations: {
    [WORDS](state, value) {
      state.words.push(value);
    },
    [NEXT_WORD](state, index) {
      state.currentIndex = index + 1;
    },
    [PREV_WORD](state, index) {
      state.currentIndex = index - 1;
    },
    [TOOGLE_ALLOW_SWITCHING](state, boolean) {
      state.allowFetchingNext = boolean;
    },
    [SET_CURRENT_INDEX](state, value) {
      state.currentIndex = value;
    },
  },
  actions: {
    initWordsStore: {
      handler({ dispatch }) {
        dispatch("fetchWords");
      },
      root: true,
    },
    async fetchWords({ commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        dispatch("toggleAllowSwitching", true);
        const response = await axios.engWord.get();
        const translate = await axios.translate.post("", {
          texts: [response.word],
        });
        const word = normalizeResponse(response, translate);
        commit(WORDS, word);
      } catch (error) {
        dispatch(
          "showNotify",
          {
            message:
              "Ooops...looks like you reached the limit, try it out a bit later",
            title: "Error",
            variant: "danger",
          },
          { root: true }
        );
        dispatch("toggleAllowSwitching", false);
        dispatch("setDefaultIndex");
        setTimeout(dispatch, 30000, "toggleAllowSwitching", true);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    showNextWord({ commit, getters }) {
      const { currentIndex } = getters;
      commit(NEXT_WORD, currentIndex);
    },
    showPrevWord({ commit, getters }) {
      const { currentIndex } = getters;
      commit(PREV_WORD, currentIndex);
    },
    toggleAllowSwitching({ commit }, boolean) {
      commit(TOOGLE_ALLOW_SWITCHING, boolean);
    },
    setDefaultIndex({ commit, getters }) {
      const { wordsList } = getters;
      let defaultIndex = 0;

      if (wordsList.length > 1) {
        defaultIndex = wordsList.length - 2;
      }

      commit(SET_CURRENT_INDEX, defaultIndex);
    },
  },
};

export default wordsStore;
