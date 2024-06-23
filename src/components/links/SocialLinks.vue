<template>
  <div class="social-links">
    <InstagramLink
      class="link-icon grow-and-rotate"
      :class="{ dark: isDark, light: !isDark }"
    />
    <FacebookLink
      class="link-icon grow-and-rotate"
      :class="{ dark: isDark, light: !isDark }"
    />
    <YoutubeLink
      class="link-icon grow-and-rotate"
      :class="{ dark: isDark, light: !isDark }"
    />
    <TikTokLink
      class="link-icon grow-and-rotate"
      :class="{ dark: isDark, light: !isDark }"
    />
  </div>
</template>

<script setup>
import InstagramLink from "src/components/links/InstagramLink.vue";
import FacebookLink from "src/components/links/FacebookLink.vue";
import YoutubeLink from "src/components/links/YoutubeLink.vue";
import TikTokLink from "src/components/links/TikTokLink.vue";

defineProps({
  isDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

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
}
</style>
