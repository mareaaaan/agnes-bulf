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
import CardSection from "src/components/sections/CardSection.vue";
import HomeIntroSection from "src/components/sections/HomeIntroSection.vue";
import EmbeddedVideoSection from "src/components/sections/EmbeddedVideoSection.vue";
import FeedbackSection from "src/components/sections/FeedbackSection.vue";
import TextImageSection from "src/components/sections/TextImageSection.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import ArchDivider from "src/components/dividers/ArchDivider.vue";
import { computed, ref } from "vue";
import { fetchPageData } from "../client";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    introTextWithIllustration: HomeIntroSection,
    textWithIllustration: TextImageSection,
    floatingText: CardSection,
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
