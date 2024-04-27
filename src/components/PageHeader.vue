<template>
  <header class="header-container">
    <button class="menu-button" @click="$emit('toggleSideBar')">
      <i-material-symbols-arrow-forward-ios-rounded class="menu-icon" />
    </button>
    <WebsiteLogo />
  </header>
</template>

<script setup>
import WebsiteLogo from "./WebsiteLogo.vue";
defineEmits(["toggleSideBar"]);
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.header-container {
  width: 100%;
  background-color: $light-color;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media screen and (max-width: $desktop-width) {
    display: block;
    overflow: hidden;
  }
}

.menu-button {
  display: none;

  @media screen and (max-width: $desktop-width) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1.25rem;
    left: -1.25rem;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    background-color: $secondary-color;
    border-radius: 50%;
    width: 2.25rem;
    height: 2.5rem;
  }
}

.menu-icon {
  position: relative;
  left: 7px;
  width: 50%;
  height: 50%;
  color: $primary-color;
}
</style>
