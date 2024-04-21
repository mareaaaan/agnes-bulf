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
* {
  box-sizing: border-box;
}

// LAYOUT
.section-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.section-grid > :slotted(*),
.section-grid > * {
  grid-column: 1 / -1;
}

// STYLES

.section__title {
  font-size: $l-font-size;
  font-weight: bold;

  @media (width >= $mobile-width) {
    font-size: $xl-font-size;
  }
}

.service-section {
  padding-inline: 1rem;
  padding-block: 2rem;
}

.videos-container {
  display: grid;
  gap: 1rem;

  @media (width >= $mobile-width) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
