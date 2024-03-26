<template>
  <section class="embedded-video-section">
    <div class="wrapper" :class="{ 'max-width': props.maxWidth }">
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
  transition: 1.2s;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media screen and (max-width: $tablet-width) {
    grid-template-columns: 1fr;
  }
}
</style>
