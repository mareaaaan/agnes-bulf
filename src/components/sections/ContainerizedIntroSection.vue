<template>
  <div
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
    class="max-width-container"
  >
    <div class="max-width">
      <IntroSection :data="props.data" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import IntroSection from "./IntroSection.vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
