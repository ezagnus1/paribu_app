<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  position: relative;
  width: 774px;
  height: fit-content;
  background: #1c1f27;
  border-radius: 5px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  padding: 20px;
}
</style>
