<template>
  <div
    class="wavy-divider"
    :class="props.isLightToDark ? 'light-background' : 'dark-background'"
  >
    <WavyBottomCurve :is-dark="props.isLightToDark" />
  </div>
</template>

<script setup>
import WavyBottomCurve from "./WavyBottomCurve.vue";

const props = defineProps({
  isLightToDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.wavy-divider {
  padding-top: 13rem;
  position: relative;
}
</style>
