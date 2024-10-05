<template>
  <PageTitle v-if="data" :data="data" />
  <component
    :is="getComponent(section._type)"
    v-for="(section, index) in data?.content?.content"
    :key="index"
    :data="section"
  />
  <WavyDivider :is-light-to-dark="false" />
  <PageFooter class="light-background" />
</template>

<script setup>
import { useRoute } from "vue-router";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";
import { ref, onBeforeMount } from "vue";
import { fetchWorkShopData } from "../client";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";
import { addOrientationToSections, addImageBordersToSections } from "src/utils";
import ContainerizedTextSection from "src/components/sections/ContainerizedTextSection.vue";
import PageTitle from "src/components/sections/PageTitle.vue";

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: ContainerizedTextImageSection,
    textBlock: ContainerizedTextSection,
    floatingText: ContainerizedCardSection,
  };

  return sectionComponentPairs[sectionType];
};

const route = useRoute();

const workshopSlug = route.params.workshop;
const data = ref({
  content: {
    content: [],
  },
});

function enrichData(data) {
  data.content.content = addOrientationToSections(data.content.content);
  data.content.content = addProductDetailsSection(data.content.content, data);
  data.content.content = addImageBordersToSections(data.content.content);

  return data;
}

function addProductDetailsSection(sections, data) {
  sections[0].details = {
    date: data.date,
    duration: data.duration,
    location: data.location,
  };
  return sections;
}

async function fetchData() {
  var tempData = await fetchWorkShopData(workshopSlug);
  tempData = enrichData(tempData);
  data.value = tempData;
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
