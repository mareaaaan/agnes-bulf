<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <ContactFormSection :data="props.data" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ContactFormSection from "./ContactFormSection.vue";

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
