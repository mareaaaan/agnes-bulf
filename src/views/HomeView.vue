<template>
  <NavBar :pages="pages" @toggle-side-bar="toggleSideBar" />
  <BlurTransition>
    <BlurLayer v-show="isSideBarOpen" />
  </BlurTransition>
  <SlideTransition>
    <SideBar
      v-show="isSideBarOpen"
      :pages="pages"
      @toggle-side-bar="toggleSideBar"
    />
  </SlideTransition>
  <main>
    <section class="text-image-group">
      <div class="text">
        <p>Bine ai venit, dragă cititorule!</p>
        <p>
          Mă numesc Agnes Maria Priseceanu. Sunt, mai întâi de toate, om, femeie
          care trăiește, crește și învață în relații, psihoterapeut care crede
          în puterea conștientizării, a vindecării și a evoluției personale.
          Sunt, de asemenea, fiică, nepoată, soră, parteneră, mamă și prietenă.
          Sunt binecuvântată cu toate aceste roluri și recunoscătoare pentru
          fiecare în parte.
        </p>
        <p>
          La nivel profesional sunt psiholog clinician, psihoterapeut de cuplu
          și familie, profesor de psihologie generală, gazdă a unui club de
          carte Conectare prin cărți și organizator al atelierelor de dezvoltare
          personală. Pe lângă acestea, iubesc să creez, să lucrez manual și să
          torn lumânări parfumate din ceară naturală de soia.
        </p>
      </div>

      <div class="image-container">
        <img src="../assets/portrait.jpg" alt="Portret cu Agnes" />
      </div>
    </section>

    <section class="card">
      <p>
        Cred că toți avem dreptul la vindecare și evoluție prin cunoaștere,
        relații, conectare autentică și prezență conștientă. Am ales această
        meserie din nevoia de a-mi cunoaște sinele, de a mă înțelege și de a
        trăi în adevăr și am reușit să devin, la nivel personal și profesional,
        omul cald, blând, empatic, prezent și pregătit de care am avut mare
        nevoie în perioadele dificile din viață.
      </p>
    </section>

    <section class="text-image-group">
      <div class="text">
        <p>
          Vreau să fiu acea voce care reamintește permanent oamenilor de forța
          magică a iubirii, a curajului, a vulnerabilității și a puterii
          interioare plantate în mod divin în interiorul fiecăruia la naștere.
        </p>
        <p>
          Sunt aici pentru a te ajuta să înveți să primești viața cu tot ce are
          ea de oferit: să poți sta cu emoțiile tale, așa cum ele apar, să poți
          accepta și integra schimbările și pierderile dificile, să mângâi
          copilul interior și să îți găsești puterea creatoare cu care ai venit
          pe lume.
        </p>
      </div>
      <div class="image-container">
        <img
          src="../assets/professional.jpg"
          alt="Agnes scriind intr-o carte"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "src/components/NavBar.vue";
import SideBar from "src/components/SideBar.vue";
import BlurLayer from "src/components/BlurLayer.vue";
import SlideTransition from "src/components/transitions/SlideTransition.vue";
import BlurTransition from "src/components/transitions/BlurTransition.vue";

const isSideBarOpen = ref(false);
function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
}

const pages = [
  { name: "Povestea mea", path: "" },
  { name: "Servicii", path: "" },
  { name: "Ateliere", path: "" },
  { name: "Tender Melt", path: "" },
  { name: "Blog", path: "" },
];
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

main {
  padding-top: 40px;
  margin: 0 auto;
  max-width: 1400px;
  font-family: Lato, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  color: $secondary-color;

  @media screen and (max-width: $desktop-width) {
    font-size: 1rem;
  }
}

p {
  text-align: left;
  padding: 1rem;
}

.card {
  padding: 3rem 0;
  p {
    max-width: 80%;
    margin: 0 auto;
  }
}

.text-image-group {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:last-of-type {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: $mobile-width) {
    flex-direction: column-reverse;
    align-items: center;

    &:last-of-type {
      flex-direction: column-reverse;
    }
  }

  .image-container {
    flex-basis: 40%;
    padding: 1rem;

    display: flex;

    @media screen and (max-width: $mobile-width) {
      flex-basis: 100%;
      justify-content: center;
    }

    img {
      object-fit: cover;
      max-height: 700px;
      width: 100%;
      height: 100%;
      object-position: center 15%;

      @media screen and (max-width: $mobile-width) {
        aspect-ratio: 1/1;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-basis: 50%;
  }
}
</style>
