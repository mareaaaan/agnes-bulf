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

.section {
  padding: 1rem;
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
}
</style>
