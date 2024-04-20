<template>
  <aside class="toc-bar">
    <section ref="section" class="section max-width-container toc-bar--header">
      <div class="section-grid max-width">
        <button class="expand-button" @click="toggleExpandHierarchy()">
          Pe această pagină
          <ExpandIcon
            class="expand-icon"
            :class="{ expanded: isExpanded }"
          ></ExpandIcon>
        </button>
      </div>
    </section>
    <ExpandTransition>
      <PageHierarchyBar v-show="isExpanded" :headers="props.headers" />
    </ExpandTransition>
  </aside>
</template>

<script setup>
import { useElementBounding } from "@vueuse/core";
import { ref, computed } from "vue";
import PageHierarchyBar from "./PageHierarchyBar.vue";
import ExpandIcon from "./ExpandIcon.vue";

const section = ref(null);

const { top } = useElementBounding(section);

const topInPixels = computed(() => {
  return top.value + window.scrollY + "px";
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

.toc-bar {
  position: sticky;
  top: v-bind(topInPixels);
}

.toc-bar--header {
  position: relative;
  z-index: 3;
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
  padding-block-end: 0.5rem;
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

.expand-icon {
  transition: transform 0.3s;

  &.expanded {
    transform: rotate(90deg);
  }
}
</style>
