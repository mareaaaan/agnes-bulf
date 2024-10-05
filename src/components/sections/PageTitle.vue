<template>
  <section class="section--base section-grid">
    <h2 v-motion-fade-in-on-visible class="section__title--page">
      <slot name="title">
        {{ props.data.title }}
      </slot>
    </h2>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// STYLES

.section__title--page {
  font-size: $xl-font-size;
  font-weight: bold;

  @media (width >= $mobile-width) {
    font-size: $xxxl-font-size;
  }
}
.section--base {
  padding-block: 2rem !important;
}
</style>
