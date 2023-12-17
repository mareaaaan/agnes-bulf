<script>
export default {
	name: "NavBar",
};
</script>

<template>
	<nav class="navbar-container">
		<button @click="$emit('toggleSideBar')" class="menu-button">
			<i-material-symbols-menu-rounded class="menu-icon" />
		</button>
		<h1 class="logo">Agnes Maria Priseceanu</h1>

		<div class="links-container">
			<a class="link" href="">Home</a>
			<a class="link" href="">Servicii</a>
			<a class="link" href="">Ateliere</a>
			<a class="link" href="">Tender Melt</a>
			<a class="link" href="">Blog</a>
		</div>
	</nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Whisper&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;200;300;400;500;600;700&display=swap");

.navbar-container {
	position: fixed;
	width: 100%;
	top: 0;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
	box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
}

.menu-button {
	display: none;
}

.logo {
	font-family: "Whisper", cursive;
	font-size: 60px;
	padding: 10px;
}

.links-container {
	display: flex;
	justify-content: center;
}

a:link,
a:visited {
	text-decoration: none;
}

.link {
	font-family: "Josefin Slab", serif;
	font-weight: 500;
	text-transform: capitalize;
	font-size: 25px;
	color: black;
	position: relative;
	padding: 10px;
}

.link::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	border-radius: 5px;
	background-color: #000000;
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

/* Mobile Styles */
@media only screen and (max-width: 1024px) {
	.navbar-container {
		display: block;
	}
	.logo {
		font-size: 30px;
	}

	.links-container {
		display: none;
	}

	.menu-button {
		position: absolute;
		display: block;
		height: 100%;
		left: 5px;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
}
</style>
