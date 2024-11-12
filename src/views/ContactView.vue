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
import ContainerizedContactFormSection from "src/components/sections/ContainerizedContactFormSection.vue";
import { addOrientationToSections } from "src/utils";

const data = ref(null);

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
    qAndA: ContainerizedQuestionsAndAnswersSection,
    contactForm: ContainerizedContactFormSection,
  };

  return sectionComponentPairs[sectionType];
};

function addFormSection(sections) {
  // Find the last textWithIllustration section
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i]._type === "textWithIllustration") {
      // Change the _type to contactForm
      sections[i]._type = "contactForm";
      break;
    }
  }

  return sections;
}

function enrichData(data) {
  data.content = addOrientationToSections(data.content);
  data.content = addFormSection(data.content);
  return data;
}

async function fetchData() {
  var pageData = await fetchPageData("contact");
  pageData = enrichData(pageData);
  data.value = pageData;
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
