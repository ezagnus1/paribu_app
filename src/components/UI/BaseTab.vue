<template>
  <div class="base-tab">
    <button class="base-tab__button">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/sass/abstracts/variables";

.base-tab {
  width: 100%;
}
.base-tab__button {
  width: 100%;
  border: none;
  padding: 0 0 7px 0;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  background: transparent;
}

.base-tab--login-active {
  color: $login-active-color;
  border-bottom: 1px solid $login-active-color !important;
}

.base-tab--signup-active {
  color: $signup-active-color;
  border-bottom: 1px solid $signup-active-color !important;
}

.base-tab--inactive {
  color: $inactive-color;
  border-bottom: 1px solid $inactive-color !important;
}
</style>
