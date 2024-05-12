<template>
  <div class="video-container">
    <iframe
      :src="props.url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.video-container {
  aspect-ratio: 16/9;

  iframe {
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: block;
  }
}
</style>
