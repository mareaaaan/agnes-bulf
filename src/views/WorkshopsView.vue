<template>
  <TableOfContentsBar v-if="!isLargeScreen" />
  <div class="max-width-container">
    <div class="grid max-width">
      <main class="main">
        <ServiceIntroSection id="0">
          <template #image>
            <img
              :src="getImageSource(intro.img.src)"
              :alt="intro.img.alt"
              class="arch-border"
            />
          </template>
          <template #title>{{ intro.title }}</template>
          <template #text>
            <p
              v-for="(paragraph, paragraph_index) in intro.text"
              :key="paragraph_index"
            >
              {{ paragraph }}
            </p>
          </template>
        </ServiceIntroSection>

        <WorkshopSection
          v-for="(workshop, index) in workshops"
          :id="index + 1"
          :key="index + 1"
          :workshop-name="workshop.name"
        >
          <template #image>
            <img
              :src="getImageSource(workshop.img.src)"
              :alt="workshop.img.alt"
              class="oval-border"
            />
          </template>
          <template #title>{{ workshop.title }}</template>
          <template #text>
            <p
              v-for="(paragraph, paragraph_index) in workshop.text"
              :key="paragraph_index"
            >
              {{ paragraph }}
            </p>
          </template>
        </WorkshopSection>
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
import workshops from "src/content/workshops/workshops.json";
import intro from "src/content/workshops/intro.json";
import getImageSource from "src/utils";
const isLargeScreen = useMediaQuery("(width >= 600px)");
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
