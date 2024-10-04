<template>
  <component
    :is="getComponent(section._type)"
    v-for="(section, index) in data?.content"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="false" />
  <PageFooter class="light-background" />
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { fetchResursePageData } from "../client";
import EmbeddedVideoSection from "src/components/sections/EmbeddedVideoSection.vue";
import FeedbackSection from "src/components/sections/FeedbackSection.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import ArchDivider from "src/components/dividers/ArchDivider.vue";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";
import ContainerizedIntroSection from "src/components/sections/ContainerizedIntroSection.vue";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import addOrientationToSections from "src/utils";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    introTextWithIllustration: ContainerizedIntroSection,
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
    videoList: EmbeddedVideoSection,
    feedbackList: FeedbackSection,
    arch_divider: ArchDivider,
  };

  return sectionComponentPairs[sectionType];
};

function enrichData(data) {
  data.content = addOrientationToSections(data.content);
  return data;
}

async function fetchData() {
  var pageData = await fetchResursePageData();
  pageData = enrichData(pageData);
  data.value = pageData;
  console.log(pageData);
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
