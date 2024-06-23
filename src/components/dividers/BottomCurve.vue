<template>
  <div class="arch-bottom-curve">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
        :class="props.isDark ? 'fill-dark' : 'fill-light'"
      ></path>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.arch-bottom-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.arch-bottom-curve svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 200px;
}

.arch-bottom-curve .fill-dark {
  fill: $primary-color;
}

.arch-bottom-curve .fill-light {
  fill: $light-color;
}
</style>
