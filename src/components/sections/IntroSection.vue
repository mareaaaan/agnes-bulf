<template>
  <section class="section--base section--intro section-grid">
    <div v-motion-fade-in-on-visible class="section__image">
      <slot name="image">
        <img
          :src="imageBuilder.image(props.data.image)"
          :alt="props.data.image.alt"
          class="arch-border"
        />
      </slot>
    </div>
    <h2 v-motion-fade-in-on-visible class="section__title">
      <slot name="title">
        {{ props.data.heading }}
      </slot>
    </h2>
    <div v-motion-fade-in-on-visible class="section__description">
      <slot name="text"> <PortableText :value="props.data.text" /></slot>
    </div>
  </section>
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

.section__title {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
    align-self: center;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 8;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-row: 1 / 3;
    grid-column: 7 / 13;
  }

  @media (width >= $desktop-width) {
    grid-column: 8 / 13;
  }
}

.section__description {
  @media (width >= $mobile-width) {
    grid-row: 2 / 3;
    grid-column: 1 / 7;
    align-self: start;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 8;
  }
}

// STYLES

.service-section {
  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 10rem;
  }
}
</style>
