<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import BlurLayer from "./components/BlurLayer.vue";

const isSideBarOpen = ref(false);
function toggleSideBar() {
	isSideBarOpen.value = !isSideBarOpen.value;
}
</script>

<template>
	<NavBar @toggle-side-bar="toggleSideBar" />
	<BlurLayer v-if="isSideBarOpen" />
	<SideBar @toggle-side-bar="toggleSideBar" v-if="isSideBarOpen" />
</template>

<style scoped></style>
