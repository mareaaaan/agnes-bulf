<template>
  <div
    class="arch-divider"
    :class="props.data.isLightToDark ? 'light-background' : 'dark-background'"
  >
    <BottomCurve :is-dark="props.isLightToDark" />
  </div>
</template>

<script setup>
import BottomCurve from "./BottomCurve.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.arch-divider {
  padding-top: 10rem;
  position: relative;
}
</style>
