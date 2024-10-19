<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <QuestionAndAnswersSection :data="props.data" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import QuestionAndAnswersSection from "./QuestionAndAnswersSection.vue";

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
