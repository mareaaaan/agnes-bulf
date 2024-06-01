<template>
  <TableOfContentsBar v-if="!isLargeScreen" />
  <div class="max-width-container">
    <div class="grid max-width">
      <main class="main">
        <ServiceIntroSection id="0">
          <template #image>
            <img
              src="../assets/office.jpg"
              alt="Poza cu Agnes zambind pe un fotoliu"
              class="arch-border"
            />
          </template>
          <template #title>Workshopuri</template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ullamcorper metus vel auctor ullamcorper. Fusce quis purus
              fringilla, laoreet lorem quis, ornare sem. Pellentesque nec
              faucibus neque, vel vulputate massa. Nam dui odio, tincidunt in
              purus vel, cursus interdum quam. Ut purus odio, ornare vel nibh
              id, feugiat aliquet nisl.
            </p>
          </template>
        </ServiceIntroSection>
        <ServiceSection id="1">
          <template #image>
            <img
              src="../assets/book-club.jpg"
              alt="Poza cu o presoana dand mai departe o carte portocalie"
              class="oval-border"
            />
          </template>
          <template #title>Club de carte</template>
          <template #text>
            <p>
              Maecens pulvinar, elit at dapibus condimentum, quam felis varius
              mauris, non cursus purus diam in magna. Curabitur sollicitudin,
              erat ac eleifend scelerisque, massa felis volutpat risus, ut
              pretium leo dui maximus sem. Suspendisse euismod lectus quis leo
              tristique, et tincidunt est maximus.
            </p>
          </template>
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
import ServiceIntroSection from "src/components/sections/ServiceIntroSection.vue";
import TableOfContentsBar from "src/components/table_of_contents/TableOfContentsBar.vue";
import TableOfContents from "src/components/table_of_contents/TableOfContents.vue";
import { useMediaQuery } from "@vueuse/core";
import WavyDivider from "src/components/dividers/WavyDivider.vue";
import PageFooter from "src/components/footer/PageFooter.vue";

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
