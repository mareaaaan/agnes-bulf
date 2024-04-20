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
  // border: 1px solid black;
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

// STYLES
:slotted(.section__text) {
  text-align: center;
  font-size: $xs-font-size;

  @media (width >= $tablet-width) {
    text-align: start;
    font-size: $font-size;
  }
}

.service-section {
  padding-inline: 1rem;
  padding-block: 2rem;
}
</style>
