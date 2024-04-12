<template>
  <TableOfContentsBar v-if="!isLargeScreen" />
  <div class="max-width-container">
    <div class="grid max-width">
      <main class="main">
        <ServiceIntroSection>
          <div class="section__image">Imagine</div>
          <h2 class="section__title">Serviciile mele</h2>
          <p class="section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            ullamcorper metus vel auctor ullamcorper. Fusce quis purus
            fringilla, laoreet lorem quis, ornare sem. Pellentesque nec faucibus
            neque, vel vulputate massa. Nam dui odio, tincidunt in purus vel,
            cursus interdum quam. Ut purus odio, ornare vel nibh id, feugiat
            aliquet nisl.
          </p>
        </ServiceIntroSection>

        <ServiceSection>
          <h3 class="section__title">Psihoterapie individuala</h3>
          <div class="section__image">Imagine</div>
          <p class="section__text">
            Fiecare demers terapeutic se bazează pe principiul
            confidențialității și al sincerității. Psihoterapia individuală este
            un proces care se desfășoară între tine și psiholog sau
            psihoterapeut cu respectarea acestor principii.
          </p>
        </ServiceSection>

        <ServiceSection>
          <h2 class="section__title">Psihoterapie de cuplu</h2>
          <div class="section__image">Imagine</div>
          <p class="section__text">
            Fiecare demers terapeutic se bazează pe principiul
            confidențialității și al sincerității. Psihoterapia de cuplu se
            adresează cuplurilor romantice, cuplurilor de prieteni sau prietene
            sau și cupluri precum: mamă-fiică, tată-fiu, etc.
          </p>
        </ServiceSection>

        <ServiceSection>
          <h2 class="section__title">Psihoterapie Familie</h2>
          <div class="section__image">Imagine</div>
          <p class="section__text">
            Fiecare demers terapeutic se bazează pe principiul
            confidențialității și al sincerității.
          </p>
        </ServiceSection>

        <ServiceSection>
          <h2 class="section__title">Evaluare psihologică</h2>
          <div class="section__image">Imagine</div>
          <p class="section__text">
            Pellentesque nec faucibus neque, vel vulputate massa. Nam dui odio,
            tincidunt in purus vel, cursus interdum quam. Ut purus odio, ornare
            vel nibh id, feugiat aliquet nisl.
          </p>
        </ServiceSection>

        <ServiceSection>
          <h2 class="section__title">Club de carte</h2>
          <div class="section__image">Imagine</div>
          <p class="section__text">
            Maecenas pulvinar, elit at dapibus condimentum, quam felis varius
            mauris, non cursus purus diam in magna. Curabitur sollicitudin, erat
            ac eleifend scelerisque, massa felis volutpat risus, ut pretium leo
            dui maximus sem. Suspendisse euismod lectus quis leo tristique, et
            tincidunt est maximus.
          </p>
        </ServiceSection>
      </main>
    </div>
  </div>
</template>

<script setup>
import ServiceSection from "src/components/ServiceSection.vue";
import ServiceIntroSection from "src/components/ServiceIntroSection.vue";
import TableOfContentsBar from "src/components/TableOfContentsBar.vue";
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(width >= 600px)");
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

// STYLES

.section * {
  border: 1px solid black;
}

.max-width {
  width: 100%;
  max-width: 1024px;
}

.max-width-container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.main {
  grid-column: 1 / -1;
}
</style>
