<template>
  <div class="social-links">
    <InstagramLink class="link-icon" :class="{ dark: isDark }" />
    <FacebookLink class="link-icon" :class="{ dark: isDark }" />
    <YoutubeLink class="link-icon" :class="{ dark: isDark }" />
  </div>
</template>

<script setup>
import InstagramLink from "./InstagramLink.vue";
import FacebookLink from "./FacebookLink.vue";
import YoutubeLink from "./YoutubeLink.vue";

defineProps({
  isDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT
.social-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

// STYLES
.social-links {
  font-size: $xs-font-size;
}

.link-icon {
  padding: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}
</style>
