<template>
  <div class="product">
    <ProductTitleSection :data="props.data" />
    <component
      :is="getComponent(section._type)"
      v-for="(section, index) in enrichedSections"
      :key="index"
      :data="section"
    />
    <DetailsSection :data="props.data">
      <template #button>
        <ContactButton v-motion-fade-in-on-visible class="section__button">
          Programează o ședință
        </ContactButton>
      </template>
    </DetailsSection>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import TextImageSection from "./TextImageSection.vue";
import CardSection from "./CardSection.vue";
import TextSection from "./TextSection.vue";
import addOrientationToSections from "src/utils";
import DetailsSection from "./DetailsSection.vue";
import ProductTitleSection from "./ProductTitleSection.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const enrichedSections = computed(() => {
  return addOrientationToSections(props.data.content.content);
});

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: TextImageSection,
    floatingText: CardSection,
    textBlock: TextSection,
  };

  return sectionComponentPairs[sectionType];
};

onMounted(() => {
  console.log(props.data);
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.product {
  scroll-margin-top: 7rem;

  @media (width >= $mobile-width) {
    scroll-margin-top: 12rem;
  }
}
</style>
