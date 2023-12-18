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
	<Transition>
		<SideBar @toggle-side-bar="toggleSideBar" v-show="isSideBarOpen" />
	</Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: transform 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
	transform: translateX(-100%);
}
</style>
