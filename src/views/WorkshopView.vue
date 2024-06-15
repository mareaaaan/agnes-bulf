<template>
  <component
    :is="getComponent(section.type)"
    v-for="(section, index) in workshop.sections"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="false" />
  <PageFooter class="light-background" />
</template>

<script setup>
import { useRoute } from "vue-router";
import detailed_workshops from "src/content/workshops/detailed_workshops.json";
import IntroSection from "src/components/sections/IntroSection.vue";
import ListSection from "src/components/sections/ListSection.vue";
import CardSection from "src/components/sections/CardSection.vue";
import HeroSection from "src/components/sections/HeroSection.vue";
const route = useRoute();

const workshop = detailed_workshops[route.params.workshop];

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    intro: IntroSection,
    list: ListSection,
    // content: "ContentSection",
    hero: HeroSection,
    card: CardSection,
  };

  return sectionComponentPairs[sectionType];
};
</script>

<style lang="scss" scoped></style>
