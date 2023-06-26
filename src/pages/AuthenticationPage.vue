<template>
  <base-card>
    <div class="base-tab-wrapper">
      <base-tab
        :class="
          selectedTab === 'login-tab'
            ? 'base-tab--login-active'
            : 'base-tab--inactive'
        "
        @click="selectTab('login-tab')"
        >{{ $t("loginTabText.login") }}</base-tab
      >
      <base-tab
        :class="
          selectedTab === 'signup-tab'
            ? 'base-tab--signup-active'
            : 'base-tab--inactive'
        "
        @click="selectTab('signup-tab')"
        >{{ $t("signUpText.signUp") }}</base-tab
      >
    </div>
    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import LoginTab from "../components/tabs/LoginTab.vue";
import SignupTab from "../components/tabs/SignupTab.vue";

export default {
  data() {
    return {
      selectedTab: "login-tab",
    };
  },
  components: {
    LoginTab,
    SignupTab,
  },
  methods: {
    selectTab(clickedTab) {
      this.selectedTab = clickedTab;
    },
  },
};
</script>

<style scoped>
.base-tab-wrapper {
  display: flex;
  justify-content: center;
}
</style>
