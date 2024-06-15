<template>
  <div class="max-width-container">
    <div class="max-width">
      <section class="service-section section-grid">
        <h2 v-motion-fade-in-on-visible class="section__heading">
          <slot name="title">{{ props.data.title }}</slot>
        </h2>
        <ul v-motion-fade-in-on-visible class="section__list">
          <slot name="text">
            <li
              v-for="(item, index) in props.data.items"
              :key="index"
              class="section__list__item"
            >
              {{ item }}
            </li>
          </slot>
        </ul>
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

// STYLES
.section__heading {
  text-align: start;
  font-weight: bold;

  font-size: $s-font-size;

  @media (width >= $mobile-width) {
    font-size: $font-size;
  }
}

.section__list {
  text-align: start;
  list-style-type: circle;

  li {
    list-style-position: inside;
    margin-bottom: 1rem;

    font-size: $s-font-size;

    @media (width >= $mobile-width) {
      font-size: $font-size;
    }
  }
}
</style>
