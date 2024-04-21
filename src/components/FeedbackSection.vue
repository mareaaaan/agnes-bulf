<template>
  <section class="service-section section-grid">
    <h2 class="section__title">Ce spun cei cu care am lucrat?</h2>
    <CardCarousel class="section__carousel" :items="feedbackItems" />
  </section>
</template>

<script setup>
import feedbackItems from "src/assets/feedbackData.json";
import CardCarousel from "./CardCarousel.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

// STYLES

.section__title {
  @media (width >= $mobile-width) {
    text-align: center;
  }
}
</style>
