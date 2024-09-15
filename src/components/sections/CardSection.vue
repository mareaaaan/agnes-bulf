<template>
  <section class="section--base section-grid">
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

// LAYOUT

// STYLES
.section__text {
  text-align: center;
  z-index: 1;
}

.max-width-container {
  position: relative;
}
</style>
