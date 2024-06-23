<template>
  <div
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
    class="max-width-container"
  >
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-in-on-visible class="section__text">
          <slot name="text">
            <p
              v-for="(paragraph, paragraph_index) in props.data.text"
              :key="paragraph_index"
            >
              {{ paragraph }}
            </p>
          </slot>
        </div>

        <div v-motion-fade-in-on-visible class="section__image">
          <slot name="image">
            <img
              :src="getImageSource(props.data.image.src)"
              :alt="props.data.image.src"
              class="arch-border"
            />
          </slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import getImageSource from "src/utils";
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

.section__text {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 1 / 8;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 9;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-column: 7 / -1;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 8 / -1;
  }

  @media (width >= $desktop-width) {
    grid-column: 9 / -1;
  }
}
</style>
