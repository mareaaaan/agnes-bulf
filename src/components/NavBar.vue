<script setup>
import SlideFromTop from "src/components/transitions/SlideFromTop.vue";
import { ref } from "vue";
import PageHeader from "./PageHeader.vue";
import SideBar from "./SideBar.vue";
import ContanctHeader from "./ContactHeader.vue";
import NavBarLinks from "./NavBarLinks.vue";
import useScrollUp from "src/composables/scrollUp";
import routes from "src/router/routes";

const emit = defineEmits(["toggleSideBar"]);

const isSideBarOpen = ref(false);
const { isScrollUp } = useScrollUp();

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  emit("toggleSideBar");
}
</script>

<template>
  <nav class="nav-bar">
    <ContanctHeader />
    <PageHeader @toggle-side-bar="toggleSideBar" />
    <SlideFromTop>
      <NavBarLinks v-show="isScrollUp" :pages="routes" />
    </SlideFromTop>
  </nav>
  <Teleport to="body">
    <SideBar
      v-show="isSideBarOpen"
      :pages="routes"
      @toggle-side-bar="toggleSideBar"
    />
  </Teleport>
</template>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
