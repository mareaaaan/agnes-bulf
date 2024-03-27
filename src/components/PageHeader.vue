<template>
  <header class="header-container">
    <button class="menu-button" @click="$emit('toggleSideBar')">
      <i-material-symbols-arrow-forward-ios-rounded class="menu-icon" />
    </button>
    <div class="logo">
      <h1 class="logo__title">Agnes Maria Priseceanu</h1>
      <h2 class="logo__subtitle">Psiholog clinician & psihoterapeut</h2>
    </div>
  </header>
</template>

<script setup>
defineEmits(["toggleSideBar"]);
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.header-container {
  width: 100%;
  background-color: $primary-color;
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

.logo {
  padding-block: 0.625rem;
  color: $secondary-color;

  @media screen and (min-width: $desktop-width) {
    padding-block-start: 0;
  }
}

.logo__title {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  text-transform: uppercase;

  @media screen and (max-width: $desktop-width) {
    font-size: 1.5625rem;
  }
}

.logo__subtitle {
  position: relative;
  left: 4rem;
  font-family: "Halimun", "Whisper", sans-serif;
  font-size: 1.25rem;

  @media screen and (max-width: $desktop-width) {
    font-size: 0.625rem;
  }
}
</style>
