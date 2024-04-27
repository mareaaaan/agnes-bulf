<template>
  <div class="logo">
    <h1 class="logo__title">Agnes Maria Priseceanu</h1>
    <h2 class="logo__subtitle">Psiholog clinician & psihoterapeut</h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.logo__title {
  font-family: "Playfair Display", serif;

  font-size: $xl-font-size;
  text-transform: uppercase;

  @media (width >= $desktop-width) {
    font-size: $xxxl-font-size;
  }
}

.logo__subtitle {
  position: relative;
  font-family: "Halimun", "Whisper", sans-serif;
  left: 2rem;
  font-size: $xxs-font-size;

  @media (width >= $mobile-width) {
    left: 4rem;
  }

  @media (width >= $desktop-width) {
    font-size: $font-size;
  }
}
</style>
