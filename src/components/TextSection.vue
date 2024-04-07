<template>
  <section v-motion-fade-visible-once class="text-container">
    <slot name="text"></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 1.2s;
}
</style>
