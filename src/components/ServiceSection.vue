<template>
  <section class="service-section section-grid">
    <div v-motion-fade-visible-once class="section__image">
      <slot name="image"></slot>
    </div>
    <h2 v-motion-fade-visible-once class="section__title">
      <slot name="title"></slot>
    </h2>
    <div v-motion-fade-visible-once class="section__text">
      <slot name="text"></slot>
    </div>
    <BaseButton
      v-motion-fade-visible-once
      class="section__button"
      href="https://ig.me/m/agnesmariapriseceanu"
      >Programează o ședință</BaseButton
    >
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.section__button {
  @media (width >= $mobile-width) {
    grid-column: 1 / 5;
  }
}

.section__title {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
    align-self: end;
  }

  @media (width >= $desktop-width) {
    grid-column: 6 / 13;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 6;
  }
}

// STYLES

.service-section {
  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 10rem;
  }
}
</style>
