<template>
  <section class="service-section section--intro section-grid">
    <div v-motion-fade-in-on-visible class="section__image">
      <slot name="image"></slot>
    </div>
    <h2 v-motion-fade-in-on-visible class="section__title">
      <slot name="title"></slot>
    </h2>
    <div v-motion-fade-in-on-visible class="section__text">
      <slot name="text"></slot>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.section__title {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 1 / 7;
    align-self: end;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 8;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-row: 1 / 2;
    grid-column: 7 / 13;
  }

  @media (width >= $desktop-width) {
    grid-column: 8 / 13;
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
