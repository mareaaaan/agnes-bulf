<template>
  <section
    class="section--base section-grid"
    :class="props.data.orientation === 'right' ? 'right' : 'left'"
  >
    <div v-motion-fade-in-on-visible class="section__image">
      <slot name="image">
        <img
          :src="imageBuilder.image(props.data.image)"
          :alt="props.data.image.alt"
          class="oval-border"
        />
      </slot>
    </div>
    <div v-motion-fade-in-on-visible class="section__text">
      <slot name="text">
        <h2 v-if="props.data.heading" class="title">
          {{ props.data.heading }}
        </h2>
        <div class="text">
          <PortableText :value="props.data.text" />
        </div>
        <ProductDetails
          v-if="props.data.details"
          :details="props.data.details"
        />
      </slot>
    </div>
    <slot name="button"> </slot>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { imageBuilder } from "src/client";
import { PortableText } from "@portabletext/vue";
import ProductDetails from "./ProductDetails.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.section-grid.left {
  .section__image {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 1 / 8;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 7;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 6;
    }
  }

  .section__text {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 8 / 13;
    }

    @media (width >= $tablet-width) {
      grid-column: 7 / 13;
    }

    @media (width >= $desktop-width) {
      grid-column: 6 / 13;
    }
  }
}

.section-grid.right {
  .section__image {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 6 / 13;
    }

    @media (width >= $tablet-width) {
      grid-column: 7 / 13;
    }

    @media (width >= $desktop-width) {
      grid-column: 8 / 13;
    }
  }

  .section__text {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 1 / 6;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 7;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 8;
    }
  }
}

// STYLES

.section__text {
  align-content: center;
}

.title {
  text-align: center;
  margin-bottom: 4rem;

  @media (width >= $mobile-width) {
    text-align: start;
  }
}
</style>
