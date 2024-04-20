<template>
  <section class="service-section section-grid">
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
* {
  box-sizing: border-box;
}

// LAYOUT
.service-section * {
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

:slotted(.section__text) {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 1 / 8;
  }
}

:slotted(.section__image) {
  img {
    max-width: 100%;
    display: block;
  }

  @media (width >= $mobile-width) {
    grid-column: 7 / -1;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 8 / -1;
  }
}

// STYLES

:slotted(.section__title) {
  font-size: $l-font-size;
  font-weight: bold;

  @media (width >= $mobile-width) {
    text-align: start;
    font-size: $xxl-font-size;
  }
}

:slotted(.section__text) {
  text-align: justify;

  font-size: $xs-font-size;
  p {
    margin-block-end: 2rem;
  }

  @media (width >= $tablet-width) {
    text-align: start;
    font-size: $font-size;
  }
}

.service-section {
  padding-inline: 1rem;
  padding-block: 2rem;
}

:slotted(.section__image) img {
  border: 4px solid white;
  border-radius: 0.5rem;

  outline: 1px solid #bdb9ac;
}
</style>
