<template>
  <component
    :is="getComponent(section._type)"
    v-for="(section, index) in workshopData.pageBuilder"
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
import { ref } from "vue";
import { fetchWorkShopData } from "../client";
import ContainerizedIntroSection from "src/components/sections/ContainerizedIntroSection.vue";
import ContainerizedTextImageSection from "src/components/sections/ContainerizedTextImageSection.vue";
import ContainerizedCardSection from "src/components/sections/ContainerizedCardSection.vue";

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    introTextWithIllustration: ContainerizedIntroSection,
    textWithIllustration: ContainerizedTextImageSection,
    floatingText: ContainerizedCardSection,
  };

  return sectionComponentPairs[sectionType];
};

const route = useRoute();

const workshopSlug = route.params.workshop;
const workshopData = ref(null);

async function fetchData() {
  workshopData.value = await fetchWorkShopData(workshopSlug);
}

fetchData();
</script>

<style lang="scss" scoped></style>
