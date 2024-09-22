<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <ProductTitleSection :data="props.data" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProductTitleSection from "./ProductTitleSection.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
</style>
