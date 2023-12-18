<template>
	<Transition name="slide">
		<slot></slot>
	</Transition>
</template>

<script>
export default {
	name: "SlideTransition",
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.2s ease-out;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(-100%);
}
</style>
