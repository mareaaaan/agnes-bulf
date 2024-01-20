<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import BlurLayer from "./components/BlurLayer.vue";
import SlideTransition from "./components/transitions/SlideTransition.vue";
import BlurTransition from "./components/transitions/BlurTransition.vue";

const isSideBarOpen = ref(false);
function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
}

const pages = [
  { name: "Povestea mea", path: "" },
  { name: "Servicii", path: "" },
  { name: "Ateliere", path: "" },
  { name: "Tender Melt", path: "" },
  { name: "Blog", path: "" },
];
</script>

<template>
  <NavBar :pages="pages" @toggle-side-bar="toggleSideBar" />
  <BlurTransition>
    <BlurLayer v-show="isSideBarOpen" />
  </BlurTransition>
  <SlideTransition>
    <SideBar
      v-show="isSideBarOpen"
      :pages="pages"
      @toggle-side-bar="toggleSideBar"
    />
  </SlideTransition>
</template>

<style scoped></style>
