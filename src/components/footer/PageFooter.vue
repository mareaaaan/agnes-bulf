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
        <ContactButton class="section__button"></ContactButton>
        <div class="copyright-container">©Agnes Bulf</div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import WebsiteLogo from "src/components/header/WebsiteLogo.vue";
import LocationInfo from "./LocationInfo.vue";
import SocialLinksFooter from "./SocialLinksFooter.vue";
import ContactButton from "../buttons/ContactButton.vue";
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT
.logo-container {
  @media (width >= $tablet-width) {
    grid-column: 1 / 7;
    text-align: left;
  }

  display: block;
  overflow: hidden;
}

.social-links-container {
  grid-column: 1 / 7;
}

.section__button {
  grid-column: 7 / 13;

  @media (width >= $tablet-width) {
    grid-column: 9 / 13;
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

  @media (width >= $tablet-width) {
    font-size: $xl-font-size;
    position: relative;
    left: 4rem;
  }

  @media (width >= $desktop-width) {
    font-size: $xxl-font-size;
    left: 5rem;
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
