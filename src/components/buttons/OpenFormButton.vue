<template>
  <BaseButton @click="navigateToForm()">
    <slot>Contactează-mă</slot>
  </BaseButton>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
const navigateToForm = () => {
  window.location.assign("https://forms.gle/vfrkGZ3PiFNaTBrJ6");
};
</script>

<style lang="scss" scoped></style>
