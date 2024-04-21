<template>
  <div class="max-width-container">
    <slot name="curve"></slot>
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-visible-once class="section__text">
          <slot name="text"></slot>
        </div>

        <div v-motion-fade-visible-once class="section__image">
          <slot name="image"></slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

.section__text {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 1 / 8;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-column: 7 / -1;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 8 / -1;
  }
}

.reverse {
  .section__image {
    @media (width >= $mobile-width) {
      grid-column: 1 / 7;
      grid-row: 1 / 2;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 6;
    }
  }

  .section__text {
    @media (width >= $mobile-width) {
      grid-column: 7 / -1;
      grid-row: 1 / 2;
    }

    @media (width >= $tablet-width) {
      grid-column: 6 / -1;
    }
  }
}
</style>
