<script setup>
import { useScroll } from "@vueuse/core";
import SlideFromTop from "src/components/transitions/SlideFromTop.vue";
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

defineEmits(["toggleSideBar"]);

const isLinksVisible = ref(true);
let lastScrollPosition = 0;

useScroll(window, {
  onScroll: (e) => {
    onScroll(e);
  },
});

function onScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < 0) {
    return;
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than the offset
  if (Math.abs(currentScrollPosition - lastScrollPosition) < 60) {
    return;
  }
  isLinksVisible.value = currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
}
</script>

<template>
  <nav>
    <header class="header-container">
      <button class="menu-button" @click="$emit('toggleSideBar')">
        <i-material-symbols-menu-rounded class="menu-icon" />
      </button>
      <div class="logo">
        <h1 class="logo__title">Agnes Maria Priseceanu</h1>
        <h2 class="logo__subtitle">Psiholog clinician & psihoterapeut</h2>
      </div>
    </header>
    <SlideFromTop>
      <div v-show="isLinksVisible" class="links-container">
        <a
          v-for="(page, index) in props.pages"
          :key="index"
          class="link"
          :href="page.path"
          >{{ page.name }}</a
        >
        <a
          class="instagram-link link"
          href="https://www.instagram.com/agnesmariapriseceanu/"
        >
          <i-mdi-instagram class="instagram-icon" />
        </a>
      </div>
    </SlideFromTop>
  </nav>
</template>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
nav {
  position: sticky;
  top: 0;
  z-index: 2;
}

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
    display: block;
    top: 1.625rem;
    height: 1.5625rem;
    left: 0.3125rem;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
}

.instagram-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  padding: 1.625rem;
  color: $secondary-color;
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
  padding-top: 0.625rem;
  font-family: "Halimun", "Whisper", sans-serif;
  font-size: 1.25rem;

  @media screen and (max-width: $desktop-width) {
    padding-top: 0.3125rem;
    font-size: 0.625rem;
  }
}

.links-container {
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}

a:link,
a:visited {
  text-decoration: none;
}

.link {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9375rem;
  color: $secondary-color;
  position: relative;
  padding: 0.625rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: $secondary-color;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
