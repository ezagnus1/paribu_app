import { createI18n } from "vue-i18n";
import en from "./en.json";
import tr from "./tr.json";

export default createI18n({
  locale: "tr",
  messages: {
    tr: tr,
    en: en,
  },
});
