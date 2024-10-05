<template>
  <TableOfContentsBar v-if="!isLargeScreen" />
  <PageTitle :data="data" />
  <div class="max-width-container">
    <div class="grid max-width">
      <main class="main">
        <div class="description">
          <component
            :is="getComponent(section._type)"
            v-for="(section, index) in data?.content"
            :key="index"
            :data="section"
          />
        </div>
        <WorkshopBlock
          v-for="(workshop, index) in data?.hierarchy"
          :id="index"
          :key="workshop"
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
import TextSection from "src/components/sections/TextSection.vue";
import TableOfContentsBar from "src/components/table_of_contents/TableOfContentsBar.vue";
import TableOfContents from "src/components/table_of_contents/TableOfContents.vue";
import { useMediaQuery } from "@vueuse/core";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";
import { ref, onBeforeMount } from "vue";
import { fetchPageData } from "../client";
import WorkshopBlock from "src/components/sections/WorkshopBlock.vue";
import { addTitleSection } from "src/utils";
import TextImageSection from "src/components/sections/TextImageSection.vue";

const isLargeScreen = useMediaQuery("(width >= 1024px)");

const getComponent = (sectionType) => {
  const sectionComponentPairs = {
    textWithIllustration: TextImageSection,
    textBlock: TextSection,
  };

  return sectionComponentPairs[sectionType];
};

const data = ref(null);

function enrichData(data) {
  data.content = addTitleSection(data.content, data.title);
  return data;
}

async function fetchData() {
  var pageData = await fetchPageData("workshopuri");
  pageData = enrichData(pageData);
  data.value = pageData;
}

onBeforeMount(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

.main {
  grid-column: 1 / -1;

  @media (width >= $desktop-width) {
    grid-column: 1 / 10;
  }
}

.table-of-contents {
  @media (width >= $desktop-width) {
    grid-column: 10 / 13;
  }
}
</style>
