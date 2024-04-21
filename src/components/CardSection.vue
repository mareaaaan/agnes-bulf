<template>
  <section class="service-section section-grid">
    <div v-motion-fade-visible-once class="section__text">
      <slot name="text"></slot>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

// STYLES
.section__text {
  text-align: center;
}
</style>
