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
        <ServiceSection
          v-for="(service, index) in data?.hierarchy"
          :id="index"
          :key="index"
          :data="service"
        >
        </ServiceSection>
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
import ServiceSection from "src/components/sections/ServiceSection.vue";
import TableOfContentsBar from "src/components/table_of_contents/TableOfContentsBar.vue";
import TableOfContents from "src/components/table_of_contents/TableOfContents.vue";
import { useMediaQuery } from "@vueuse/core";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";
import { ref } from "vue";
import { fetchPageData } from "../client";
import IntroSection from "src/components/sections/IntroSection.vue";

const isLargeScreen = useMediaQuery("(width >= 600px)");

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: IntroSection,
  };

  return sectionComponentPairs[sectionType];
};

const data = ref(null);

async function fetchData() {
  data.value = await fetchPageData("servicii");
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
