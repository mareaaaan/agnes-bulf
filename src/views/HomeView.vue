<template>
  <NavBar />
  <main>
    <TextImageSection :is-image-first="false" :max-width="true">
      <template #text>
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
      </template>
      <template #image>
        <img
          src="../assets/portrait.jpg"
          class="curved-top"
          alt="Portret cu Agnes"
        />
      </template>
    </TextImageSection>

    <CardSection :max-width="true">
      <template #text>
        <p>
          Sunt psiholog și psihoterapeut. M-am format profesional ca psiholog
          clinician absolvind Facultatea de Psihologie și Științele Educației,
          Universitatea București și Masterul cu specializarea Psihologie
          Clinică, evaluare și intervenție. Ca psihoterapeut de cuplu și
          familie, m-am format absolvind programul de formare complementară în
          psihoterapia familiei organizat de Asociația Multiculturală de
          Psihologie și Psihoterapie.
        </p>
      </template>
    </CardSection>

    <TextImageSection
      :is-image-first="true"
      :max-width="true"
      :has-curve="true"
      class="light-background"
    >
      <template #text>
        <p>
          În paralel, sunt profesor de psihologie generală, gazdă a unui club de
          carte, <strong>Conectare prin cărți</strong>, și organizator al
          atelierelor de dezvoltare personală.
        </p>
        <p>
          Pe lângă acestea, iubesc să fiu cu mine, să trăiesc conștient, ordonat
          și aerisit, dar mai ales, iubesc să creez. De-a lungul timpului am
          născocit diferite obiecte de decor, genți din hârtie și alte obiecte
          decorate manual. Într-o zi de martie din anul 2021, am primit în dar o
          lumânare parfumată care a fost ca un semn divin că mai pot oferi
          oamenilor o sursă de lumină și căldură . Și astfel, a luat naștere
          <strong>Tender Melt</strong>, un mic business local care are misiunea
          de a transmite oamenilor prin parfumul lumânărilor că bunătatea și
          generozitatea sunt valori prețioase la îndemâna oricui.
        </p>
      </template>
      <template #image>
        <img
          src="../assets/handwork.jpg"
          class="curved-top curved-bottom"
          alt="Agnes lucrand la ceva manual"
        />
      </template>
    </TextImageSection>

    <CardSection class="light-background" :max-width="true">
      <template #text>
        <p>
          Cred că toți avem dreptul la vindecare și evoluție prin
          <strong>cunoaștere, relații, conectare autentică</strong>
          și <strong>prezență conștientă</strong>. Mi-am ales meseria din nevoia
          de a-mi cunoaște sinele, de a mă înțelege și de a trăi în adevăr și am
          reușit să devin, la nivel personal și profesional, omul cald, blând,
          empatic, prezent și pregătit de care am avut mare nevoie în perioadele
          dificile din viață.
        </p>
      </template>
    </CardSection>

    <TextImageSection :is-image-first="false" :max-width="true">
      <template #text>
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
      </template>
      <template #image>
        <img
          src="../assets/professional.jpg"
          alt="Agnes scriind intr-o carte"
          class="curved-bottom"
        />
      </template>
    </TextImageSection>

    <EmbeddedVideoSection
      :max-width="true"
      :videos="[
        'https://www.youtube.com/embed/Nli1-gAFiCc?si=UgC4SGGaiIqe3hPc',
        'https://www.youtube.com/embed/VuAejEjAyxM?si=fJur3MUGc7tmTO6F',
      ]"
    />

    <section class="max-width">
      <h2 class="strong feedback-title">Ce spun cei cu care am lucrat?</h2>
      <CardCarousel :items="feedbackItems" />
    </section>

    <TextSection>
      <template #text>
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
      </template>
    </TextSection>
  </main>
</template>

<script setup>
import NavBar from "src/components/NavBar.vue";
import CardCarousel from "src/components/CardCarousel.vue";
import feedbackItems from "src/assets/feedbackData.json";
import TextImageSection from "src/components/TextImageSection.vue";
import CardSection from "src/components/CardSection.vue";
import TextSection from "src/components/TextSection.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $secondary-color;
  background-color: $primary-color;

  @media screen and (max-width: $desktop-width) {
    font-size: $s-font-size;
  }

  & > * {
    padding-block-end: 2rem;
  }

  & > :first-child {
    padding-block-start: 2rem;
  }
}

.feedback-title {
  margin: 0 1rem;
  margin-bottom: 1rem;
  font-size: $l-font-size;
}
</style>
