/** Api config options
 *
 * @param {Boolean} hasDictionaryDef (1) - Only return words with dictionary definitions
 * @param {String} includePartOfSpeech (2) - CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
 * @param {String} excludePartOfSpeech (3) - CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
 * @param {Number} minCorpusCount (4) - Minimum corpus frequency for terms
 * @param {Number} maxCorpusCount (5) - Maximum corpus frequency for terms
 * @param {Number} minDictionaryCount (6) - Minimum dictionary count
 * @param {Number} maxDictionaryCount - Maximum dictionary count
 * @param {Number} minLength (7) - Minimum word length
 * @param {Number} maxLength (8) - Maximum word length
 *
 */

function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    hasDictionaryDef: true,
    maxCorpusCount: -1,
    minDictionaryCount: 1,
    maxDictionaryCount: -1,
    minLength: 5,
    maxLength: 15,
    api_key: process.env.VUE_APP_API_WORD_KEY,
  });

  return config;
}

function returnData(response) {
  // вытаскиваем data через interceptor на случай исчезновения data
  return response.data;
}

export default function(axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}
