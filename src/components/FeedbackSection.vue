<template>
  <section class="service-section section-grid">
    <h2 class="section__title">Ce spun cei cu care am lucrat?</h2>
    <CardCarousel class="section__carousel" :items="feedbackItems" />
  </section>
</template>

<script setup>
import feedbackItems from "src/assets/feedbackData.json";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

* {
  box-sizing: border-box;
}

// LAYOUT
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

.section__title {
  font-size: $l-font-size;
  font-weight: bold;

  @media (width >= $mobile-width) {
    font-size: $xl-font-size;
  }
}

.service-section {
  padding-inline: 1rem;
  padding-block: 2rem;
}
</style>
