<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <TextSection :data="props.data" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import TextSection from "./TextSection.vue";

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
