<template>
  <section class="section--base section-grid">
    <h2 v-motion-fade-in-on-visible class="section__title">
      <slot name="title">
        {{ props.data.title }}
      </slot>
    </h2>
    <div v-motion-fade-in-on-visible class="section__text">
      <slot name="text">
        <PortableText :value="props.data.text" />
      </slot>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
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
.section-grid {
  container-type: inline-size;
}

.section-grid.left {
  .section__title {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      align-self: center;
    }
  }

  .section__text {
    @media (width >= $mobile-width) {
      grid-row: 2 / 3;
    }
  }
}
</style>
