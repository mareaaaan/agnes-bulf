<template>
  <NavBar :pages="pages" />
  <main>
    <section class="text-image-group max-width">
      <div class="text">
        <p>Bine ai venit, dragă cititorule!</p>
        <p>
          Mă numesc Agnes Maria Priseceanu. Sunt, mai întâi de toate, om, femeie
          și mamă care trăiește conștient și prezent. Relațiile sunt sursa
          vieții noastre, sursa atașamentului nostru și reprezintă fundamentul
          iubirii, fericirii și evoluției. M-am născut dintr-o relație și m-am
          dezvoltat construind relații cu oamenii din jurul meu, cu sinele, cu
          lumea și cu divinitatea. Am crescut și am învățat enorm în aceste
          relații, iar astăzi dau mai departe din toate aceste daruri.
        </p>
        <p>
          Sunt un psihoterapeut care crede în puterea conștientizării, a
          vindecării și a evoluției personale dată prin naștere. Cred că venim
          echipați cu tot ce avem nevoie pentru a obține o viață armonioasă, iar
          contextele de viață sunt oportunități excelente de atingere a
          potențialului personal. Sunt, fiică, nepoată, soră, parteneră, mamă și
          prietenă; sunt binecuvântată cu toate aceste roluri și recunoscătoare
          pentru fiecare în parte.
        </p>
      </div>

      <div
        v-intersection-observer="onIntersectionObserverTop"
        class="image-container"
        :class="{ visible: isTopVisible }"
      >
        <img src="../assets/portrait.jpg" alt="Portret cu Agnes" />
      </div>
    </section>

    <section class="card max-width">
      <p>
        Sunt psiholog și psihoterapeut. M-am format profesional ca psiholog
        clinician absolvind Facultatea de Psihologie și Științele Educației,
        Universitatea București și Masterul cu specializarea Psihologie Clinică,
        evaluare și intervenție. Ca psihoterapeut de cuplu și familie, m-am
        format absolvind programul de formare complementară în psihoterapia
        familiei organizat de Asociația Multiculturală de Psihologie și
        Psihoterapie.
      </p>
    </section>

    <section class="text-image-group image-left max-width">
      <div class="text">
        <p>
          În paralel, sunt profesor de psihologie generală, gazdă a unui club de
          carte, <span class="strong">Conectare prin cărți</span>, și
          organizator al atelierelor de dezvoltare personală.
        </p>
        <p>
          Pe lângă acestea, iubesc să fiu cu mine, să trăiesc conștient, ordonat
          și aerisit, dar mai ales, iubesc să creez. De-a lungul timpului am
          născocit diferite obiecte de decor, genți din hârtie și alte obiecte
          decorate manual. Într-o zi de martie din anul 2021, am primit în dar o
          lumânare parfumată care a fost ca un semn divin că mai pot oferi
          oamenilor o sursă de lumină și căldură . Și astfel, a luat naștere
          <span class="strong">Tender Melt</span>, un mic business local care
          are misiunea de a transmite oamenilor prin parfumul lumânărilor că
          bunătatea și generozitatea sunt valori prețioase la îndemâna oricui.
        </p>
      </div>
      <div
        v-intersection-observer="onIntersectionObserverMiddle"
        class="image-container"
        :class="{ visible: isMiddleVisible }"
      >
        <img src="../assets/handwork.jpg" alt="Agnes lucrand la ceva manual" />
      </div>
    </section>

    <section class="card max-width">
      <p>
        Cred că toți avem dreptul la vindecare și evoluție prin
        <span class="strong">cunoaștere, relații, conectare autentică</span> și
        <span class="strong">prezență conștientă</span>. Mi-am ales meseria din
        nevoia de a-mi cunoaște sinele, de a mă înțelege și de a trăi în adevăr
        și am reușit să devin, la nivel personal și profesional, omul cald,
        blând, empatic, prezent și pregătit de care am avut mare nevoie în
        perioadele dificile din viață.
      </p>
    </section>

    <section class="text-image-group max-width">
      <div class="text">
        <p>
          Vreau să fiu acea voce care reamintește permanent oamenilor de forța
          magică a iubirii, a curajului, a vulnerabilității și a puterii
          interioare plantate în mod divin în interiorul fiecăruia la naștere.
        </p>
        <p>
          Sunt aici pentru a te ajuta să înveți să primești viața cu tot ce are
          ea de oferit într-o manieră conștientă și blândă: să poți sta cu
          emoțiile tale, așa cum ele apar, să poți accepta și integra
          schimbările și pierderile dificile din viața ta, să mângâi copilul
          interior și să îți găsești puterea creatoare cu care ai venit deja pe
          lume.
        </p>
      </div>
      <div
        v-intersection-observer="onIntersectionObserverBottom"
        class="image-container"
        :class="{ visible: isBottomVisible }"
      >
        <img
          src="../assets/professional.jpg"
          alt="Agnes scriind intr-o carte"
        />
      </div>
    </section>

    <section class="max-width">
      <h2 class="strong feedback-title">Ce spun cei cu care am lucrat?</h2>
      <CardCarousel :items="feedbackItems" />
    </section>

    <section class="card small-text max-width">
      <p class="center">
        Bine ai venit în casa mea virtuală!
        <br />
        Dă-ți voie să uiți cine ai învățat că ești și să te cunoști așa cum ai
        fost dintotdeauna.
        <br />
        Primește viața cu tot ce are ea de oferit.
        <br />
        Ascultă-ți nevoile și folosește-te de autocompasiune.
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "src/components/NavBar.vue";
import { vIntersectionObserver } from "@vueuse/components";
import CardCarousel from "src/components/CardCarousel.vue";
import feedbackItems from "src/assets/feedbackData.json";

const isTopVisible = ref(false);
const isBottomVisible = ref(false);
const isMiddleVisible = ref(false);
function onIntersectionObserverTop([{ isIntersecting }]) {
  if (!isTopVisible.value) {
    isTopVisible.value = isIntersecting;
  }
}

function onIntersectionObserverMiddle([{ isIntersecting }]) {
  if (!isMiddleVisible.value) {
    isMiddleVisible.value = isIntersecting;
  }
}

function onIntersectionObserverBottom([{ isIntersecting }]) {
  if (!isBottomVisible.value) {
    isBottomVisible.value = isIntersecting;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: 1.375rem;
  line-height: 1.5;
  color: $secondary-color;
  background-color: $primary-color;

  @media screen and (max-width: $desktop-width) {
    font-size: 1rem;
  }
}

section {
  margin-bottom: 4rem;

  &:first-of-type {
    margin-top: 4rem;
  }
}
.card {
  p {
    max-width: 80%;
    margin: 0 auto;
  }
}

.text-image-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  // Keeps the overflow hidden for the image translation
  overflow-x: hidden;

  &.image-left {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: $mobile-width) {
    flex-direction: column-reverse;
    align-items: center;

    &.image-left {
      flex-direction: column-reverse;
    }
  }

  .image-container {
    flex-basis: 40%;
    padding: 1rem;

    display: flex;

    transition: 1.2s;

    transform: translateX(100px);
    opacity: 0;

    &.visible {
      transform: translateX(0);
      opacity: 1;
    }

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

    p {
      text-align: left;
      margin: 1rem;
    }
  }
}

.feedback-title {
  margin-bottom: 1rem;
}

.strong {
  font-weight: bold;
}

.center {
  text-align: center;
}
</style>
