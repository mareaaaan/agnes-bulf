<template>
  <section class="text-container">
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
}
</style>
