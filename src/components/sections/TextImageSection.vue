<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-in-on-visible class="section__text">
          <slot name="text">
            <PortableText :value="props.data.content" />
          </slot>
        </div>

        <div v-motion-fade-in-on-visible class="section__image">
          <slot name="image">
            <img
              :src="imageBuilder.image(props.data.image)"
              :alt="props.data.image.alt"
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
import { imageBuilder } from "src/client";
import { PortableText } from "@portabletext/vue";
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

.section__image {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 1 / 6;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 5;
  }
}

.section__text {
  @media (width >= $mobile-width) {
    grid-column: 7 / -1;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 6 / -1;
  }

  @media (width >= $desktop-width) {
    grid-column: 5 / -1;
  }
}
</style>
