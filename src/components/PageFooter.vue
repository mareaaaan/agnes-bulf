<template>
  <footer class="footer-container">
    <section class="service-section max-width-container toc-bar--header">
      <div class="section-grid max-width">
        <div class="logo">AGNES MARIA PRISECEANU</div>
        <div class="location">nr7, strada Ceva, Pitesti</div>
        <div class="icons">Incons</div>
        <div class="contact-button">Contacteaza-ma</div>
        <div class="copyright">©Agnes Maria Priseceanu</div>
      </div>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT
.logo {
  @media (width >= $desktop-width) {
    grid-column: 1 / 7;
  }
}

.location {
  @media (width >= $desktop-width) {
    grid-column: 1 / 7;
  }
}

.icons {
  grid-column: 1 / 7;

  @media (width >= $desktop-width) {
    grid-column: 7 / 13;
  }
}

.contact-button {
  grid-column: 7 / 13;

  @media (width >= $desktop-width) {
    grid-row: 1 / 2;
  }
}

// STYLES

.section-grid > * {
  border: 1px solid black;
}

.service-section {
  padding-block-end: 0;
}
</style>
