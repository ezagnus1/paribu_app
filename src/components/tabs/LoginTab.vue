<template>
  <div>
    <base-input
      ><input
        class="base-input__email"
        type="email"
        :placeholder="$t('loginTabText.emailAddress')"
        v-model="userEmail"
    /></base-input>
    <base-input
      ><input
        class="base-input__password"
        type="password"
        :placeholder="$t('loginTabText.password')"
        v-model="userPassword"
    /></base-input>
    <base-button buttonColor="#8CA632" class="base-button__login-btn"
      ><span class="base-button__auth-button-title" @click="loginUser">{{
        $t("loginTabText.password")
      }}</span></base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
    };
  },
  methods: {
    loginUser() {
      const loginInformation = {
        email: this.userEmail,
        password: this.userPassword,
      };

      this.$store.dispatch("getCurrentUser", loginInformation);
    },
  },
};
</script>
