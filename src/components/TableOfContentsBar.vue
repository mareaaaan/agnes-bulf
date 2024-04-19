<template>
  <section ref="section" class="section max-width-container">
    <div class="section-grid max-width">
      <button class="expand-button" @click="toggleExpandHierarchy()">
        Pe această pagină
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          class="icon"
          :class="{ expanded: isExpanded }"
          data-v-e5e7bc23=""
        >
          <path
            d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"
          ></path>
        </svg>
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

.icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 2px;
  width: 14px;
  height: 14px;
  fill: $secondary-color;
  transition: transform 0.3s;

  &.expanded {
    transform: rotate(90deg);
  }
}
</style>
