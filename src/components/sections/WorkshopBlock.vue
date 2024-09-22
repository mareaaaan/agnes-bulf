<template>
  <div class="product">
    <ProductTitleSection :data="props.data" />
    <TextImageSection :data="enrichedSections[0]">
      <template #button>
        <OpenWorkshopButton
          v-motion-fade-in-on-visible
          class="section__button"
          :workshop-name="props.data.slug.current"
        ></OpenWorkshopButton>
      </template>
    </TextImageSection>
  </div>
</template>

<script setup>
import ProductTitleSection from "./ProductTitleSection.vue";
import TextImageSection from "./TextImageSection.vue";
import { computed } from "vue";
import addOrientationToSections from "src/utils";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const enrichedSections = computed(() => {
  return addOrientationToSections(props.data.content.content);
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.product {
  scroll-margin-top: 7rem;

  @media (width >= $desktop-width) {
    scroll-margin-top: 12rem;
  }
}
</style>
