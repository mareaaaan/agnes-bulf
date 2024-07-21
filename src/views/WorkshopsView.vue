<template>
  <TableOfContentsBar v-if="!isLargeScreen" />
  <div class="max-width-container">
    <div class="grid max-width">
      <main class="main">
        <component
          :is="getComponent(section._type)"
          v-for="(section, index) in data?.pageBuilder"
          :key="index"
          :data="section"
        />

        <WorkshopSection
          v-for="(workshop, index) in workshopsData"
          :id="index"
          :key="index"
          :data="workshop"
        />
      </main>

      <TableOfContents
        v-if="isLargeScreen"
        v-motion-fade-in-on-visible
        class="table-of-contents"
      />
    </div>
  </div>

  <WavyDivider :is-light-to-dark="false" />
  <PageFooter class="light-background" />
</template>
<script setup>
import ServiceIntroSection from "src/components/sections/ServiceIntroSection.vue";
import TableOfContentsBar from "src/components/table_of_contents/TableOfContentsBar.vue";
import TableOfContents from "src/components/table_of_contents/TableOfContents.vue";
import WorkshopSection from "src/components/sections/WorkshopSection.vue";
import { useMediaQuery } from "@vueuse/core";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";
import { ref } from "vue";
import { fetchWorkShopsData, fetchPageData } from "../client";

const isLargeScreen = useMediaQuery("(width >= 600px)");

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: ServiceIntroSection,
  };

  return sectionComponentPairs[sectionType];
};

const data = ref(null);
const workshopsData = ref(null);

async function fetchData() {
  data.value = await fetchPageData("servicii");
  workshopsData.value = await fetchWorkShopsData();
}

fetchData();
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

.main {
  grid-column: 1 / -1;

  @media (width >= $mobile-width) {
    grid-column: 1 / 10;
  }
}

.table-of-contents {
  @media (width >= $mobile-width) {
    grid-column: 10 / 13;
  }
}
</style>
