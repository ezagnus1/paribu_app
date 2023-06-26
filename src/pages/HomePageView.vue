<template>
  <div class="homepage-block">
    <base-card>
      <h1 class="homepage-block__main-title">
        {{ $t("homePage.welcomeTitle") }}
      </h1>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
@import "@/sass/base/typography";

.homepage-block__main-title {
  text-align: center;
  color: white;
  font-family: $primary-font-family;
}
</style>
