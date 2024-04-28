<template>
  <div class="social-links--footer">
    <p v-if="isLargeScreen" class="social-links__text">Urmărește-mă pe:</p>
    <SocialLinks :is-dark="true" />
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(width >= 600px)");
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT
.social-links--footer {
  display: flex;
}

// STYLES

.social-links__text {
  font-size: $xs-font-size;
}

:deep(.link-icon) {
  width: 45px;

  @media (width >= $mobile-width) {
    padding-block-start: 0.1rem;
    width: 40px;
  }
}
</style>
