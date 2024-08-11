<template>
  <component
    :is="getComponent(section._type)"
    v-for="(section, index) in processedSections"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="true" />
  <PageFooter class="dark-background" />
</template>

<script setup>
import EmbeddedVideoSection from "src/components/sections/EmbeddedVideoSection.vue";
import FeedbackSection from "src/components/sections/FeedbackSection.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import ArchDivider from "src/components/dividers/ArchDivider.vue";
import { computed, ref } from "vue";
import { fetchPageData } from "../client";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";
import ContainerizedIntroSection from "src/components/sections/ContainerizedIntroSection.vue";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    introTextWithIllustration: ContainerizedIntroSection,
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
    videos: EmbeddedVideoSection,
    feedback: FeedbackSection,
    arch_divider: ArchDivider,
  };

  return sectionComponentPairs[sectionType];
};

function addIntroSection(sections) {
  var introSection = sections.find(
    (section) => section._type === "textWithIllustration",
  );
  const index = sections.indexOf(introSection);
  introSection._type = "introTextWithIllustration";
  sections[index] = introSection;
  return sections;
}

const processedSections = computed(() => {
  const sections = data.value?.pageBuilder;

  if (!sections) return [];

  var newSections = [
    ...sections
      .slice(0, sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, false)),
    getDivider("arch_divider", false),
    ...sections
      .slice(sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, true)),
  ];
  newSections = addIntroSection(newSections);
  return newSections;
});

function getDivider(_type, isLightToDark) {
  return {
    _type,
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
