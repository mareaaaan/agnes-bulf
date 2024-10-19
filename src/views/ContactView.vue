<template>
  <PageTitle v-if="data" :data="data" />
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
import { fetchPageData } from "src/client";
import { ref, onBeforeMount } from "vue";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import ContainerizedQuestionsAndAnswersSection from "src/components/sections/ContainerizedQuestionsAndAnswersSection.vue";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
    qAndA: ContainerizedQuestionsAndAnswersSection,
  };

  return sectionComponentPairs[sectionType];
};

async function fetchData() {
  var pageData = await fetchPageData("contact");
  data.value = pageData;
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
