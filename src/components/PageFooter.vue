<template>
  <footer class="footer-container">
    <section class="service-section max-width-container toc-bar--header">
      <div class="section-grid max-width">
        <div class="logo-container">
          <WebsiteLogo />
        </div>
        <div class="location">nr7, strada Ceva, Pitesti</div>
        <div class="icons">Incons</div>
        <div class="contact-button">Contacteaza-ma</div>
        <div class="copyright">©Agnes Maria Priseceanu</div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import WebsiteLogo from "./WebsiteLogo.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT
.logo-container {
  @media (width >= $desktop-width) {
    grid-column: 1 / 7;
    text-align: left;
  }

  display: block;
  overflow: hidden;
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

.logo-container {
  display: block;
  overflow: hidden;
}

:deep(.logo__title) {
  font-size: $l-font-size;

  @media (width >= $desktop-width) {
    font-size: $xxl-font-size;
  }
}

:deep(.logo__subtitle) {
  font-size: $xxs-font-size;

  @media (width >= $desktop-width) {
    font-size: $s-font-size;
  }
}
</style>
