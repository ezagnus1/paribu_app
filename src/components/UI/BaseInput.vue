<template>
  <div class="base-input">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/sass/base/typography";
.base-input {
  margin: 20px 0;
  font-family: $primary-font-family;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #fdfefd;
}
</style>
