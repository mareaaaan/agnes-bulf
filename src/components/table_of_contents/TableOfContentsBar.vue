<template>
  <aside class="toc-bar">
    <section class="section max-width-container toc-bar--header">
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
import { ref, computed, onMounted } from "vue";
import PageHierarchyBar from "./PageHierarchyBar.vue";
import ExpandIcon from "src/components/buttons/ExpandIcon.vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const isExpanded = ref(false);

function toggleExpandHierarchy() {
  isExpanded.value = !isExpanded.value;
}

const postition = ref(0);

const positionValue = computed(() => {
  return postition.value + "px";
});

onMounted(() => {
  const element = document.querySelector(".header-container");
  const rect = element.getBoundingClientRect();
  postition.value = rect.bottom;
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

.toc-bar {
  position: sticky;
  top: v-bind(positionValue);
  z-index: 2;
}

.toc-bar--header {
  position: relative;
  z-index: 3;
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
