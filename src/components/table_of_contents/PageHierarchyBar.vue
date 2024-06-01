<template>
  <section ref="section" class="section max-width-container page-hierarchy-bar">
    <div class="section-grid max-width">
      <PageHierarchy />
    </div>
  </section>
</template>

<script setup>
import PageHierarchy from "./PageHierarchy.vue";
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

.page-hierarchy-bar {
  width: 100%;
  position: absolute;
}

// STYLES

.section {
  padding-inline: 1rem;
  padding-block-end: 0.5rem;
  background-color: $light-color;
}
</style>
