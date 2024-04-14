<template>
  <section class="section section--intro section-grid">
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
* {
  box-sizing: border-box;
}
.section * {
  border: 1px solid black;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.section-grid > :slotted(*) {
  grid-column: 1 / -1;
}

:slotted(.section__title) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
  }
}

:slotted(.section__image) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }
}

// STYLES

:slotted(.section__title) {
  font-size: $xl-font-size;
  font-weight: bold;
  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 12rem;
  }
}

:slotted(.section__text) {
  text-align: justify;
}

.section {
  padding-inline: 1rem;
  padding-block: 2rem;
}
</style>
