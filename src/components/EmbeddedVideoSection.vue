<template>
  <section class="service-section section-grid">
    <h2 class="section__title">Urmărește podcasturile la care am participat</h2>
    <div class="videos-container">
      <EmbeddedVideo
        v-for="(videoUrl, index) in props.videos"
        :key="index"
        :url="videoUrl"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  videos: Array,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

// STYLES

.videos-container {
  display: grid;
  gap: 1rem;

  @media (width >= $mobile-width) {
    grid-template-columns: 1fr 1fr;
  }
}

.section__title {
  @media (width >= $mobile-width) {
    text-align: center;
  }
}
</style>
