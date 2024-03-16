<script setup>
import { useScroll } from "@vueuse/core";
import SlideFromTop from "src/components/transitions/SlideFromTop.vue";
import { defineProps, ref } from "vue";
import PageHeader from "./PageHeader.vue";

const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["toggleSideBar"]);

const isSideBarOpen = ref(false);

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  emit("toggleSideBar");
}

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
      <div class="contact max-width">
        <span>Urmărește-mă pe:</span>
        <InstagramLink class="instagram-link dark" />
      </div>
    </aside>
    <PageHeader @toggle-side-bar="toggleSideBar" />
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
  <Teleport to="body">
    <SideBar
      v-show="isSideBarOpen"
      :pages="props.pages"
      @toggle-side-bar="toggleSideBar"
    />
  </Teleport>
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

.instagram-link {
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
