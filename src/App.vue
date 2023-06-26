<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "@/sass/base/typography";

body {
  background-color: #2e323e;
  display: flex;
  justify-content: center;
}

.base-button__auth-button-title {
  width: 100%;
  height: 27px;
  font-family: $primary-font-family;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #fdfeff;
  line-height: 2.5;
}

.base-input__username,
.base-input__email,
.base-input__password {
  width: 100%;
  outline: 0;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #bdbdc0;
  font-family: $primary-font-family;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #fdfefd;
}

.base-input__username::placeholder,
.base-input__email::placeholder,
.base-input__password::placeholder {
  color: #fdfefd;
}
</style>
