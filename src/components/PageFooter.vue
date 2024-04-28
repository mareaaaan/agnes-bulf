<template>
  <footer class="footer-container">
    <section class="service-section max-width-container toc-bar--header">
      <div class="section-grid max-width">
        <div class="logo-container">
          <WebsiteLogo />
        </div>
        <div class="location-container"><LocationInfo /></div>
        <div class="social-links-container">
          <SocialLinksFooter />
        </div>
        <BaseButton
          v-motion-fade-in-on-visible
          class="section__button"
          href="https://ig.me/m/agnesmariapriseceanu"
          >Contactează-mă</BaseButton
        >
        <div class="copyright-container">©Agnes Maria Priseceanu</div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import WebsiteLogo from "./WebsiteLogo.vue";
import BaseButton from "./BaseButton.vue";
import LocationInfo from "./LocationInfo.vue";
import SocialLinksFooter from "./SocialLinksFooter.vue";
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

.location-container {
  @media (width >= $desktop-width) {
    grid-column: 1 / 5;
  }
}

.social-links-container {
  grid-column: 1 / 7;

  @media (width >= $desktop-width) {
    grid-column: 5 / 9;
  }
}

.section__button {
  grid-column: 7 / 13;

  @media (width >= $desktop-width) {
    grid-column: 9 / 13;
    grid-row: 2 / 3;
  }
}

// STYLES

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

:deep(.base-button) {
  padding-inline: 1rem;
}

.copyright-container {
  font-size: $xs-font-size;
}
</style>
