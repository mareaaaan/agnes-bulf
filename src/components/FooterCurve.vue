<template>
  <div
    class="footer-curve-container"
    :class="props.isFooterDark ? 'light-background' : 'dark-background'"
  >
    <WavyBottomCurve :is-dark="props.isFooterDark" />
  </div>
</template>

<script setup>
import WavyBottomCurve from "./WavyBottomCurve.vue";

const props = defineProps({
  isFooterDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.footer-curve-container {
  padding-top: 8rem;
  position: relative;
}
</style>
