<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <h1 class="app-header__h1">
        <router-link to="/" class="app-header__link app-header__main-title">{{
          $t("appHeader.mainTitle")
        }}</router-link>
      </h1>
      <ul class="app-header__nav-item-wrapper">
        <li class="app-header__nav-item">
          <router-link
            to="/authentication"
            class="app-header__link app-header__auth-title"
            >{{ $t("appHeader.authenticationTitle") }}</router-link
          >
        </li>
        <li @click="changeLocale('tr')" class="app-header__nav-item">
          <img
            class="app-header__flag-icon app-header__flag-icon--us-flag"
            src="@/assets/images/turkey.png"
          />
        </li>
        <li @click="changeLocale('en')" class="app-header__nav-item">
          <img
            class="app-header__flag-icon app-header__flag-icon--tr-flag"
            src="@/assets/images/united-states.png"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import i18n from "@/locales/i18n";

export default {
  methods: {
    changeLocale(language) {
      i18n.global.locale = language;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/layout/header";

.app-header__h1 {
  margin: 0;
  color: $white-color;

  .app-header__link {
    color: $white-color;
    margin: 0;
  }

  .app-header__link:hover,
  .app-header__link:active,
  .app-header__link.router-link-active {
    border-color: transparent;
  }
}

.app-header__nav-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  .app-header__nav-item {
    margin: 10px;
  }
}

.app-header__link {
  padding: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-family: inherit;
}
.app-header__flag-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
