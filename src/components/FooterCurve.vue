<template>
  <div class="footer-curve-container">
    <WavyBottomCurve />
  </div>
</template>

<script setup>
import WavyBottomCurve from "./WavyBottomCurve.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.footer-curve-container {
  padding-top: 8rem;
  position: relative;
}
</style>
