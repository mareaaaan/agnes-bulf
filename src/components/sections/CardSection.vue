<template>
  <div class="max-width-container">
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-in-on-visible class="section__text">
          <slot name="text">
            <p
              v-for="(paragraph, paragraph_index) in props.data.text"
              :key="paragraph_index"
            >
              {{ paragraph }}
            </p>
          </slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
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

// STYLES
.section__text {
  text-align: center;
  z-index: 1;
}

.max-width-container {
  position: relative;
}
</style>
