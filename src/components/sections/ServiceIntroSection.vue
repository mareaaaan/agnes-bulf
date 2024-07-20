<template>
  <section class="section--intro section-grid">
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
    <div v-motion-fade-in-on-visible class="section__text">
      <slot name="text"> <PortableText :value="props.data.content" /></slot>
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
    align-self: end;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 8;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }

  @media (width >= $desktop-width) {
    grid-column: 8 / 13;
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
