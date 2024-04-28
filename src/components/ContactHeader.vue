<template>
  <aside class="contact-container">
    <SocialLinks class="max-width" :is-dark="true" />
  </aside>
</template>

<script setup>
import SocialLinks from "./SocialLinks.vue";
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.contact-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: $light-color;

  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}
</style>
