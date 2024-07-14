<template>
  <component
    :is="getComponent(section.type)"
    v-for="(section, index) in processedSections"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="true" />
  <PageFooter class="dark-background" />
</template>

<script setup>
import index_data from "src/content/home/index_data.json";
import CardSection from "src/components/sections/CardSection.vue";
import HomeIntroSection from "src/components/sections/HomeIntroSection.vue";
import EmbeddedVideoSection from "src/components/sections/EmbeddedVideoSection.vue";
import FeedbackSection from "src/components/sections/FeedbackSection.vue";
import TextImageSection from "src/components/sections/TextImageSection.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import ArchDivider from "src/components/dividers/ArchDivider.vue";
import { computed } from "vue";
import { ref } from "vue";
import { fetchPageData } from "../client";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    home_intro: HomeIntroSection,
    card: CardSection,
    text_image: TextImageSection,
    video: EmbeddedVideoSection,
    feedback: FeedbackSection,
    arch_divider: ArchDivider,
  };

  return sectionComponentPairs[sectionType];
};

const processedSections = computed(() => {
  return [
    ...index_data.sections
      .slice(0, index_data.sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, false)),
    getDivider("arch_divider", false),
    ...index_data.sections
      .slice(index_data.sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, true)),
  ];
});

function getDivider(type, isLightToDark) {
  return {
    type,
    isLightToDark,
  };
}

function addBackgroundColorToSection(section, isLight) {
  return {
    ...section,
    isLight,
  };
}

async function fetchData() {
  data.value = await fetchPageData("povestea-mea");
}

fetchData();
</script>

<style lang="scss" scoped></style>
