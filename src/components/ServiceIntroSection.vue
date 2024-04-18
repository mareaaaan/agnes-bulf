<template>
  <section class="service-section section--intro section-grid">
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
* {
  box-sizing: border-box;
}
.service-section * {
  // border: 1px solid black;
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
    align-self: end;
  }
}

:slotted(.section__image) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }
}

:slotted(.section__image) img {
  max-width: 100%;
  display: block;
}

// STYLES

:slotted(.section__title) {
  font-size: $xl-font-size;
  font-weight: bold;

  @media (width >= $mobile-width) {
    text-align: start;
    font-size: $xxl-font-size;
  }
}

:slotted(.section__text) {
  text-align: justify;
}

.service-section {
  padding-inline: 1rem;
  padding-block: 3rem;

  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 10rem;
  }
}

:slotted(.section__image) img {
  border: 4px solid white;
  border-radius: 0.5rem;

  outline: 1px solid #bdb9ac;
}
</style>
