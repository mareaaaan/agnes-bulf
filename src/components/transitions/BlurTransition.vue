<template>
	<Transition name="blur">
		<slot></slot>
	</Transition>
</template>

<script setup></script>

<style>
.blur-enter-active,
.blur-leave-active {
	transition: opacity 0.2s ease-out;
}

.blur-enter-from,
.blur-leave-to {
	opacity: 0;
}
</style>
