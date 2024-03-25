<template>
  <section class="text-image-group">
    <div class="wrapper" :class="{ 'max-width': props.maxWidth }">
      <div class="text-container" :class="{ 'image-left': props.isImageFirst }">
        <slot name="text"></slot>
      </div>
      <div
        v-if="props.isImageFirst"
        v-motion-slide-visible-once-left
        class="image-container"
      >
        <slot name="image"></slot>
      </div>
      <div v-else v-motion-slide-visible-once-right class="image-container">
        <slot name="image"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  isImageFirst: Boolean,
  maxWidth: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.text-image-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  // Keeps the overflow hidden for the image translation
  overflow-x: hidden;

  &.image-left {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: $mobile-width) {
    flex-direction: column-reverse;
    align-items: center;

    &.image-left {
      flex-direction: column-reverse;
    }
  }
}

.image-container {
  flex-basis: 40%;
  padding: 1rem;

  display: flex;

  transition: 1.2s;

  @media screen and (max-width: $mobile-width) {
    flex-basis: 100%;
    justify-content: center;
  }

  :slotted(img) {
    object-fit: cover;
    max-height: 700px;
    width: 100%;
    height: 100%;
    object-position: center 15%;

    @media screen and (max-width: $mobile-width) {
      aspect-ratio: 1/1;
    }
  }

  :slotted(.curved-top) {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  :slotted(.curved-bottom) {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 50%;

  :slotted(p) {
    margin: 1rem;
    text-align: left;
  }
}
</style>
