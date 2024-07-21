<template>
  <section class="service-section section-grid">
    <div v-motion-fade-in-on-visible class="section__image">
      <slot name="image">
        <img
          :src="imageBuilder.image(props.data.image)"
          :alt="props.data.image.alt"
          class="oval-border"
        />
      </slot>
    </div>
    <h2 v-motion-fade-in-on-visible class="section__title">
      <slot name="title">
        {{ props.data.title }}
      </slot>
    </h2>
    <div v-motion-fade-in-on-visible class="section__text">
      <slot name="text"><PortableText :value="props.data.description" /></slot>
    </div>
    <OpenWorkshopButton
      v-motion-fade-in-on-visible
      class="section__button"
      :workshop-name="props.data.slug.current"
    ></OpenWorkshopButton>
  </section>
</template>

<script setup>
import OpenWorkshopButton from "../buttons/OpenWorkshopButton.vue";
import { imageBuilder } from "src/client";
import { PortableText } from "@portabletext/vue";
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.section__button {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 6;
  }
}

.section__title {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
    align-self: end;
  }

  @media (width >= $desktop-width) {
    grid-column: 6 / 13;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 6;
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
