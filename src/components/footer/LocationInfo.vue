<template>
  <div class="location">
    <MapsLink class="location__icon" />
    <p class="location__text">
      Bulevardul Frații Golești, nr.13, Etajul 4, Pitesti, Romania
    </p>
  </div>
</template>

<script setup>
import MapsLink from "src/components/links/MapsLink.vue";
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
// LAYOUT
.location {
  display: flex;
  width: 100%;
  height: 100%;
}

// STYLES

.location__icon {
  align-self: start;
  padding-inline-end: 0.25rem;
  padding-block-start: 0.1rem;
}

.location__text {
  font-size: $xs-font-size;
  text-align: left;
}
</style>
