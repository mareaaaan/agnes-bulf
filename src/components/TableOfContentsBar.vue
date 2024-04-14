<template>
  <section ref="section" class="section max-width-container">
    <div class="section-grid max-width">
      <button class="expand-button" @click="toggleExpandHierarchy()">
        Pe această pagină >
      </button>
      <PageHierarchy v-if="isExpanded" :headers="props.headers" />
    </div>
  </section>
</template>

<script setup>
import { useElementBounding } from "@vueuse/core";
import PageHierarchy from "./PageHierarchy.vue";
import { ref, computed } from "vue";

const section = ref(null);

const { top } = useElementBounding(section);

const topInPixels = computed(() => {
  return top.value + "px";
});

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const isExpanded = ref(false);

function toggleExpandHierarchy() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

* {
  box-sizing: border-box;
}

.section {
  position: sticky;
  top: v-bind(topInPixels);
}

.section * {
  // border: 1px solid black;
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

// STYLES

.section {
  padding-inline: 1rem;
  background-color: $light-color;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.expand-button {
  text-align: right;
  font-size: $s-font-size;
}
</style>
