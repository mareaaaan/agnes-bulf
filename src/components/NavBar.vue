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
  if (Math.abs(currentScrollPosition - lastScrollPosition) < 100) {
    return;
  }
  isLinksVisible.value = currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
}
</script>

<template>
  <nav>
    <aside class="contact-container">
      <div class="contact">
        <span>Urmărește-mă pe:</span>
        <a
          class="instagram-link"
          href="https://www.instagram.com/agnesmariapriseceanu/"
        >
          <i-mdi-instagram class="instagram-icon" />
        </a>
      </div>
    </aside>
    <header class="header-container">
      <button class="menu-button" @click="$emit('toggleSideBar')">
        <i-material-symbols-arrow-forward-ios-rounded class="menu-icon" />
        <!-- <i-material-symbols-menu-rounded class="menu-icon" /> -->
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

.contact {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: $max-width;
  color: $secondary-color;
  font-size: 0.9375rem;
  padding: 0 1rem;
}

.contact-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;

  @media screen and (max-width: $desktop-width) {
    display: none;
  }
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

.instagram-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $secondary-color;
  padding: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}

.logo {
  padding: 1.25rem;
  color: $secondary-color;

  @media screen and (min-width: $desktop-width) {
    padding-top: 0;
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
