<template>
  <component
    :is="getComponent(section.type)"
    v-for="(section, index) in workshop.sections"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="true" />
  <PageFooter class="dark-background" />
</template>

<script setup>
import { useRoute } from "vue-router";
import detailed_workshops from "src/content/workshops/detailed_workshops.json";
const route = useRoute();

const workshop = detailed_workshops[route.params.workshop];

const getComponent = (section) => {
  const sectionComponentPairs = {
    intro: "IntroSection",
    // list: "ListSection",
    // content: "ContentSection",
    // hero: "HeroSection",
    // card: "CardSection",
  };

  return sectionComponentPairs[section.type];
};
</script>

<style lang="scss" scoped></style>
