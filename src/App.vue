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
</script>

<template>
	<NavBar @toggle-side-bar="toggleSideBar" />
	<BlurTransition>
		<BlurLayer v-show="isSideBarOpen" />
	</BlurTransition>
	<SlideTransition>
		<SideBar @toggle-side-bar="toggleSideBar" v-show="isSideBarOpen" />
	</SlideTransition>
</template>

<style scoped></style>
