<template>
  <IntroSection :data="workshopData" />
  <ContentSection :data="workshopData" />
  <WavyDivider :is-light-to-dark="false" />
  <PageFooter class="light-background" />
</template>

<script setup>
import { useRoute } from "vue-router";
import IntroSection from "src/components/sections/IntroSection.vue";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";
import { ref } from "vue";
import { fetchWorkShopData } from "../client";

const route = useRoute();

const workshopSlug = route.params.workshop;
const workshopData = ref(null);

async function fetchData() {
  workshopData.value = await fetchWorkShopData(workshopSlug);
}

fetchData();
</script>

<style lang="scss" scoped></style>
