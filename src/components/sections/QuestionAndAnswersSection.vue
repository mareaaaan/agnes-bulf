<template>
  <section class="section--base section-grid">
    <AccordieonList :items="items" />
  </section>
</template>

<script setup>
import AccordieonList from "./AccordieonList.vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

import { computed } from "vue";

const items = computed(() => {
  return props.data.items.map((item) => ({
    label: item.question,
    content: item.answer,
  }));
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
</style>
