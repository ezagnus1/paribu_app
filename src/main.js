import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locales/i18n";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseTab from "./components/UI/BaseTab.vue";

const app = createApp(App);

app
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-input", BaseInput)
  .component("base-tab", BaseTab);

app.use(i18n).use(store).use(router).mount("#app");
