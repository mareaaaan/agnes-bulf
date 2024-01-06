<template>
	<div class="links-container">
		<button @click="$emit('toggleSideBar')" class="close-button">
			<i-material-symbols-close-rounded class="close-icon" />
		</button>
		<a class="link" href="">Home</a>
		<a class="link" href="">Servicii</a>
		<a class="link" href="">Ateliere</a>
		<a class="link" href="">Tender Melt</a>
		<a class="link" href="">Blog</a>
	</div>
</template>

<script setup></script>

<style scoped>
.links-container {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	background-color: var(--secondary-color);
	display: flex;
	flex-direction: column;
	align-items: baseline;
	width: 70%;
}

a:link,
a:visited {
	text-decoration: none;
}

.link:first-of-type {
	margin-top: 50px;
}

.link {
	font-family: "Lato", sans-serif;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 20px;
	color: var(--primary-color);
	padding: 15px;
}

.close-button {
	position: absolute;
	display: block;
	right: 10px;
	top: 10px;
	background: none;
	color: inherit;
	border: none;
	width: 40px;
	height: 40px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.close-icon {
	color: var(--primary-color);
	width: 100%;
	height: 100%;
}
</style>
