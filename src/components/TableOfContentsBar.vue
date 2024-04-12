<template>
  <section ref="section" class="section section--intro max-width-container">
    <div class="section-grid max-width">
      <p class="expand-button">Pe această pagină ></p>
    </div>
  </section>
</template>

<script setup>
import { useElementBounding } from "@vueuse/core";
import { ref, computed } from "vue";

const section = ref(null);

const { top } = useElementBounding(section);

const topInPixels = computed(() => {
  return top.value + "px";
});
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
  border: 1px solid black;
}
.max-width {
  width: 100%;
  max-width: 1024px;
  padding-inline: 1em;
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

.expand-button {
  grid-column: 7 / 13;
  cursor: pointer;
}

.expand-button {
  text-align: right;
  font-size: $s-font-size;
}

// STYLES

.section {
  background-color: $light-color;
}
</style>
