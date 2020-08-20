/** Api config options
 *
 * @param {String} sourceLanguageCode - Язык, на котором написан исходный текст. Указывается в формате ISO 639-1 (например, ru). Максимальная длина строки в символах — 3.
 * @param {String} targetLanguageCode - Обязательное поле. Язык, на который переводится текст. Указывается в формате ISO 639-1 (например, en). Максимальная длина строки в символах — 3.
 * @param {String} format - Формат текста. PLAIN_TEXT: Текст без разметки. Значение по умолчанию. HTML: Текст в формате HTML.
 * @param {Array of Strings} texts - Обязательное поле. Массив строк для перевода. Максимальная общая длина всех строк составляет 10000 символов.Должен содержать хотя бы один элемент.
 * @param {String} folderId - Идентификатор каталога, к которому у вас есть доступ.
 */

function setData(config) {
  const data = config.data || {};
  config.data = Object.assign(data, {
    folderId: process.env.VUE_APP_FOLDER_ID,
    sourceLanguageCode: "en",
    targetLanguageCode: "ru",
  });

  return config;
}

function returnData(response) {
  // вытаскиваем data через interceptor на случай исчезновения data
  return response.data;
}

export default function(axios) {
  axios.interceptors.request.use(setData);
  axios.interceptors.response.use(returnData);
}
