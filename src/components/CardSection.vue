<template>
  <div class="max-width-container">
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-in-on-visible class="section__text">
          <slot name="text"></slot>
        </div>
      </section>
    </div>
    <slot name="curve"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

// STYLES
.section__text {
  text-align: center;
  z-index: 1;
}

.max-width-container {
  position: relative;
}
</style>
