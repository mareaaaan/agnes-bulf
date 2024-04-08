<template>
  <section class="section max-width-container">
    <div class="section-grid max-width">
      <slot></slot>
      <div class="section__button">Programează o ședință</div>
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

.section-grid > :slotted(*),
.section-grid > * {
  grid-column: 1 / -1;
}

.section__button {
  @media (width >= $mobile-width) {
    grid-column: 1 / 5;
  }
}

:slotted(.section__title) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }
}

:slotted(.section__image) {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
  }
}

:slotted(.section__title) {
  font-size: $l-font-size;
  font-weight: bold;
}
</style>
