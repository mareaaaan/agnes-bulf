<template>
  <TableOfContentsBar v-if="!isLargeScreen" :headers="headers" />
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
          <template #title>Serviciile mele</template>
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
              src="../assets/individual-therapy.jpg"
              alt="Poza cu doua fotolii, o masuta si un dulap cu carti"
              class="rounded-border"
            />
          </template>
          <template #title>Psihoterapie individuala</template>
          <template #text>
            <p>
              Fiecare demers terapeutic se bazează pe principiul
              confidențialității și al sincerității. Psihoterapia individuală
              este un proces care se desfășoară între tine și psiholog sau
              psihoterapeut cu respectarea acestor principii.
            </p>
          </template>
        </ServiceSection>

        <ServiceSection id="2">
          <template #image>
            <img
              src="../assets/couple-therapy.jpg"
              alt="Poza cu doua maini stranse pe un fundal cu un copac"
              class="oval-border"
            />
          </template>
          <template #title>Psihoterapie de cuplu</template>
          <template #text>
            <p>
              Fiecare demers terapeutic se bazează pe principiul
              confidențialității și al sincerității. Psihoterapia de cuplu se
              adresează cuplurilor romantice, cuplurilor de prieteni sau
              prietene sau și cupluri precum: mamă-fiică, tată-fiu, etc.
            </p>
          </template>
        </ServiceSection>

        <ServiceSection id="3">
          <template #image>
            <img
              src="../assets/family-therapy.jpg"
              alt="Poza cu doua maini stranse pe un fundal cu un copac"
              class="rounded-border"
            />
          </template>
          <template #title>Psihoterapie Familie</template>
          <template #text>
            <p>
              Fiecare demers terapeutic se bazează pe principiul
              confidențialității și al sincerității.
            </p>
          </template>
        </ServiceSection>

        <ServiceSection id="4">
          <template #image>
            <img
              src="../assets/evaluare-psihologica.jpg"
              alt="Poza cu o presoana dand mai departe o carte portocalie"
              class="oval-border"
            />
          </template>
          <template #title>Evaluare psihologică</template>
          <template #text>
            <p>
              Pellentesque nec faucibus neque, vel vulputate massa. Nam dui
              odio, tincidunt in purus vel, cursus interdum quam. Ut purus odio,
              ornare vel nibh id, feugiat aliquet nisl.
            </p>
          </template>
        </ServiceSection>

        <ServiceSection id="5">
          <template #image>
            <img
              src="../assets/book-club.jpg"
              alt="Poza cu o presoana dand mai departe o carte portocalie"
              class="rounded-border"
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
        :headers="headers"
      />
    </div>
  </div>

  <FooterCurve :is-footer-dark="false" />
  <PageFooter class="light-background" />
</template>
<script setup>
import ServiceSection from "src/components/sections/ServiceSection.vue";
import ServiceIntroSection from "src/components/sections/ServiceIntroSection.vue";
import TableOfContentsBar from "src/components/table_of_contents/TableOfContentsBar.vue";
import TableOfContents from "src/components/table_of_contents/TableOfContents.vue";
import { useMediaQuery } from "@vueuse/core";
import FooterCurve from "src/components/dividers/FooterCurve.vue";
import PageFooter from "src/components/footer/PageFooter.vue";

const isLargeScreen = useMediaQuery("(width >= 600px)");

const headers = [
  "Serviciile mele",
  "Psihoterapie individuala",
  "Psihoterapie de cuplu",
  "Psihoterapie Familie",
  "Evaluare psihologică",
  "Club de carte",
];
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
