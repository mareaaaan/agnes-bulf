<template>
  <div
    class="arch-curve-container"
    :class="props.isLightToDark ? 'light-background' : 'dark-background'"
  >
    <BottomCurve :is-dark="props.isLightToDark" />
  </div>
</template>

<script setup>
import BottomCurve from "./BottomCurve.vue";

const props = defineProps({
  isLightToDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.arch-curve-container {
  padding-top: 10rem;
  position: relative;
}
</style>
