<template>
  <section class="section section-grid">
    <slot></slot>
    <div class="section__button">Programează o ședință</div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
* {
  box-sizing: border-box;
}

// LAYOUT
.section * {
  border: 1px solid black;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.section-grid > :slotted(*),
.section-grid > * {
  grid-column: 1 / -1;
}

.section__button {
  @media (width >= $mobile-width) {
    grid-column: 1 / 5;
  }
}

:slotted(.section__title) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }
}

:slotted(.section__image) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
  }
}

// STYLES

:slotted(.section__title) {
  font-size: $l-font-size;
  font-weight: bold;
  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 12rem;
  }
}

.section {
  padding-inline: 1rem;
  padding-block: 2rem;
}
</style>
