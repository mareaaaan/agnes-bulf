<template>
  <div
    class="tilt-divider"
    :class="props.isLightToDark ? 'light-background' : 'dark-background'"
  >
    <TiltTopCurve :is-dark="props.isLightToDark" />
  </div>
</template>

<script setup>
import TiltTopCurve from "./TiltTopCurve.vue";

const props = defineProps({
  isLightToDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.tilt-divider {
  position: relative;
}
</style>
