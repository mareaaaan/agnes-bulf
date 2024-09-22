<template>
  <section class="section--base section-grid">
    <slot name="button"> </slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.section-grid {
  container-type: inline-size;
}

.section-grid {
  .section__button {
    @media (width >= $mobile-width) {
      grid-column: 1 / 7;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 6;
    }
  }
}
</style>
