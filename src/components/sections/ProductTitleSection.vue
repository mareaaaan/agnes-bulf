<template>
  <section class="section--base section-grid">
    <h2
      v-motion-fade-in-on-visible
      class="section__title section__title--product"
    >
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
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// STYLES

.section--base {
  padding-block-end: 1rem !important;
}
</style>
