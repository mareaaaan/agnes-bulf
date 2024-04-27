<template>
  <aside ref="tableOfContents" class="table-of-contents">
    <div class="hierarchy-container">
      <h3 class="hieararchy-title">Pe această pagină</h3>
      <PageHierarchy :headers="props.headers" />
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PageHierarchy from "./PageHierarchy.vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const tableOfContents = ref(null);

const top = ref(0);

const topInPixels = computed(() => {
  return top.value + "px";
});

onMounted(() => {
  top.value =
    tableOfContents.value.getBoundingClientRect().top + window.scrollY;
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

.hierarchy-container {
  position: sticky;
  top: v-bind(topInPixels);
}

// STYLES

.table-of-contents {
  padding-inline-end: 1rem;
  padding-block-start: 3rem;
}

.hieararchy-title {
  font-size: $font-size;
  margin-bottom: 0.625rem;
  text-align: start;
}
</style>
