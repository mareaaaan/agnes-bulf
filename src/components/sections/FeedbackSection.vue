<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <section class="section--base section-grid">
        <h2 v-motion-fade-in-on-visible class="section__title">
          Ce spun cei cu care am lucrat?
        </h2>
        <CardCarousel
          v-motion-fade-in-on-visible
          class="section__carousel"
          :items="data.Feedback"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import CardCarousel from "src/components/cards/CardCarousel.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

// STYLES

.section__title {
  @media (width >= $mobile-width) {
    text-align: center;
  }
}
</style>
