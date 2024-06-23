<template>
  <TiltDivider :is-light-to-dark="true" />
  <section
    class="section__image"
    :style="{ backgroundImage: `url('${imageSource}')` }"
  ></section>
</template>

<script setup>
import getImageSource from "src/utils";
import { defineProps } from "vue";
import TiltDivider from "../dividers/TiltDivider.vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const imageSource = getImageSource(props.data.image.src);
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

// STYLES
.section__image {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  margin-block-end: 3rem;

  height: 65vh;

  @media (width >= $desktop-width) {
    height: 80vh;
    background-position: center;
  }
}
</style>
