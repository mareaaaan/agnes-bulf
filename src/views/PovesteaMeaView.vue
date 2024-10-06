<template>
  <PageTitle v-if="data" :data="data" />
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
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import {
  addOrientationToSections,
  addImageBordersToSections,
  addBackgroundColortoSections,
} from "src/utils";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
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

  data.content = addBackgroundColortoSections(data.content);

  data.content = addImageBordersToSections(data.content);
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
