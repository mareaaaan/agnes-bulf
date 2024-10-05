<template>
  <component
    :is="getComponent(section._type)"
    v-for="(section, index) in data?.content"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="true" />
  <PageFooter class="dark-background" />
</template>

<script setup>
import EmbeddedVideoSection from "src/components/sections/EmbeddedVideoSection.vue";
import FeedbackSection from "src/components/sections/FeedbackSection.vue";
import PageTitle from "src/components/sections/PageTitle.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import ArchDivider from "src/components/dividers/ArchDivider.vue";
import { ref, onBeforeMount } from "vue";
import { fetchHomePageData } from "../client";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";
import ContainerizedIntroSection from "src/components/sections/ContainerizedIntroSection.vue";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import { addOrientationToSections, addTitleSection } from "src/utils";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    introTextWithIllustration: ContainerizedIntroSection,
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
    videoList: EmbeddedVideoSection,
    feedbackList: FeedbackSection,
    arch_divider: ArchDivider,
    pageTitle: PageTitle,
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

function addBackgroundColortoSections(sections) {
  sections = [
    ...sections
      .slice(0, sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, false)),
    getDivider("arch_divider", false),
    ...sections
      .slice(sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, true)),
  ];
  return sections;
}

function enrichData(data) {
  data.content = addOrientationToSections(data.content);

  data.content = addBackgroundColortoSections(data.content);

  data.content = addIntroSection(data.content);

  data.content = addTitleSection(data.content, data.title);
  return data;
}

async function fetchData() {
  var pageData = await fetchHomePageData();
  pageData = enrichData(pageData);
  data.value = pageData;
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
