<script setup>
import { ref } from "vue";
import useScrollUp from "src/composables/scrollUp";
import { topLevelRoutes } from "src/router/routes";
import ContanctHeader from "./ContactHeader.vue";
import PageHeader from "./PageHeader.vue";
import NavBarLinks from "./NavBarLinks.vue";
import SlideFromTop from "src/components/transitions/SlideFromTop.vue";
import SideBar from "./SideBar.vue";

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
      <NavBarLinks v-show="isScrollUp" :pages="topLevelRoutes" />
    </SlideFromTop>
  </nav>
  <Teleport to="body">
    <SideBar
      v-show="isSideBarOpen"
      :pages="topLevelRoutes"
      @toggle-side-bar="toggleSideBar"
    />
  </Teleport>
</template>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 3;
}
</style>
