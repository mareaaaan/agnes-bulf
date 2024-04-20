<template>
  <section
    ref="section"
    class="section max-width-container page-hierarchy-container"
  >
    <div class="section-grid max-width">
      <PageHierarchy :headers="props.headers" />
    </div>
  </section>
</template>

<script setup>
import PageHierarchy from "./PageHierarchy.vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

* {
  box-sizing: border-box;
}

.max-width {
  width: 100%;
  max-width: 1024px;
}

.max-width-container {
  display: flex;
  justify-content: center;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.section-grid > * {
  grid-column: 1 / -1;
}

.page-hierarchy-container {
  position: relative;
}

// STYLES

.section {
  padding-inline: 1rem;
  padding-block-end: 0.5rem;
  background-color: $light-color;
}
</style>
