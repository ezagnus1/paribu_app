<template>
  <button class="base-button" :style="{ backgroundColor: buttonColor }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["buttonColor"],
};
</script>

<style lang="scss" scoped>
@import "@/sass/components/buttons";
</style>
