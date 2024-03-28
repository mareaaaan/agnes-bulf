<template>
  <section class="embedded-video-section">
    <h2 class="strong video-section-title">
      Urmărește podcasturile la care am participat
    </h2>
    <div class="wrapper" :class="{ 'max-width': props.maxWidth }">
      <div class="videos-container">
        <EmbeddedVideo
          v-for="(videoUrl, index) in props.videos"
          :key="index"
          :url="videoUrl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  maxWidth: Boolean,
  // eslint-disable-next-line vue/require-default-prop
  videos: Array,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.embedded-video-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  width: 100%;
}

.videos-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media screen and (max-width: $tablet-width) {
    grid-template-columns: 1fr;
  }
}

.video-section-title {
  margin: 0 1rem;
  margin-bottom: 1rem;
  font-size: $l-font-size;
}
</style>
