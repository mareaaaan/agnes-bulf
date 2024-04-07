<template>
  <section class="section section--intro max-width-container">
    <div class="section-grid max-width">
      <slot></slot>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
* {
  box-sizing: border-box;
}
.section * {
  border: 1px solid black;
}
.max-width {
  width: 100%;
  max-width: 1024px;
  padding: 1em;
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

:slotted(.section__title) {
  font-size: $xl-font-size;
  font-weight: bold;
}
</style>
