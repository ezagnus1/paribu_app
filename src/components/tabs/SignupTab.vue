<template>
  <div>
    <base-input>
      <input
        @blur="validateInput"
        class="base-input__username"
        type="text"
        :placeholder="$t('signUpText.fullName')"
        v-model="userName"
      />
    </base-input>
    <p v-if="isNameInValid" class="input-error">
      {{ $t("inputErrorMessages.userName") }}
    </p>
    <base-input>
      <input
        @blur="validateInput"
        class="base-input__email"
        type="email"
        :placeholder="$t('signUpText.emailAddress')"
        v-model="userEmail"
      />
    </base-input>
    <p v-if="isEmailInValid" class="input-error">
      {{ $t("inputErrorMessages.userEmail") }}
    </p>
    <base-input>
      <input
        @blur="validateInput"
        class="base-input__password"
        type="password"
        :placeholder="$t('signUpText.password')"
        v-model="userPassword"
      />
    </base-input>
    <p v-if="isPasswordInValid" class="input-error">
      {{ $t("inputErrorMessages.userPassword") }}
    </p>
    <base-button buttonColor="#E84362">
      <span class="base-button__auth-button-title" @click="signUp">{{
        $t("signUpText.signUp")
      }}</span>
    </base-button>
  </div>
</template>

<script>
import User from "@/models/User.js";

export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      isNameInValid: false,
      isPasswordInValid: false,
      isEmailInValid: false,
    };
  },
  methods: {
    signUp() {
      if (this.validateInput()) {
        const signedUser = new User({
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword,
        });

        this.$store.dispatch("signUpUser", signedUser);
      }
    },

    validateInput() {
      this.isNameInValid = this.userName.length >= 5 ? false : true;
      this.isEmailInValid = /^[^@]+@\w+(\.\w+)+\w$/.test(this.userEmail)
        ? false
        : true;
      this.isPasswordInValid = this.userPassword.length >= 5 ? false : true;

      return !(
        this.isEmailInValid ||
        this.isNameInValid ||
        this.isPasswordInValid
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/abstracts/variables";
.input-error {
  color: $error-primary-color;
}
</style>
