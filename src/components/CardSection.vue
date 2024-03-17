<template>
  <TextSection>
    <slot name="text"> </slot>
  </TextSection>
</template>

<script setup>
import TextSection from "./TextSection.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
:slotted(p) {
  max-width: 80%;
}
</style>
