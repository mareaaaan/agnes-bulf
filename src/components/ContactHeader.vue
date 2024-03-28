<template>
  <aside class="contact-container">
    <div class="contact max-width">
      <InstagramLink class="dark link-icon" />
      <FacebookLink class="dark link-icon" />
      <YoutubeLink class="dark link-icon" />
    </div>
  </aside>
</template>

<script setup>
import InstagramLink from "./InstagramLink.vue";
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

.contact {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: $secondary-color;
  font-size: $xs-font-size;
  padding: 0 1rem;
}

.link-icon {
  padding: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}
</style>
