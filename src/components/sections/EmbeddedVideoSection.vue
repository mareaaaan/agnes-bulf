<template>
  <div
    class="max-width-container"
    :class="props.data.isLight ? 'light-background' : 'dark-background'"
  >
    <div class="max-width">
      <section class="section--base section-grid">
        <h2 v-motion-fade-in-on-visible class="section__title">
          {{ props.data.heading }}
        </h2>
        <div v-motion-fade-in-on-visible class="videos-container">
          <EmbeddedVideo
            v-for="(video, index) in props.data.Video"
            :key="index"
            :url="video.url"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT
.videos-container {
  display: grid;
  gap: 1rem;

  @media (width >= $mobile-width) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
// STYLES

.section__title {
  @media (width >= $mobile-width) {
    text-align: center;
  }
}
</style>
