import axios from "axios";
import interceptorsEng from "./interceptorsEng";
import interseptorsTranslate from "./interseptorsTranslate";

const engWord = axios.create({
  baseURL: process.env.VUE_APP_API_WORD_URL,
});

interceptorsEng(engWord);

const translate = axios.create({
  baseURL: process.env.VUE_APP_API_TRANSLATE_URL,
  headers: {
    Authorization: process.env.VUE_APP_API_TRANSLATE_KEY,
  },
});

interseptorsTranslate(translate);

export default { engWord, translate };
