<script setup></script>

<template>
	<nav class="navbar-container">
		<button @click="$emit('toggleSideBar')" class="menu-button">
			<i-material-symbols-menu-rounded class="menu-icon" />
		</button>
		<div class="logo">
			<h1 class="logo__title">Agnes Maria Priseceanu</h1>
			<h2 class="logo__subtitle">psiholog clinician & psihoterapeut</h2>
		</div>

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
.navbar-container {
	position: fixed;
	width: 100%;
	top: 0;
	background-color: var(--primary-color);
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
	padding: 10px;
	color: var(--secondary-color);
}

.logo__title {
	font-family: "Playfair Display", serif;
	font-size: 60px;
}

.logo__subtitle {
	position: relative;
	left: 25%;
	padding-top: 10px;
	font-family: "Halimun", "Whisper", sans-serif;
	font-size: 25px;
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
	font-family: "Lato", sans-serif;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 25px;
	color: var(--secondary-color);
	position: relative;
	padding: 10px;
}

.link::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	border-radius: 5px;
	background-color: var(--secondary-color);
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

	.logo__title {
		font-size: 25px;
	}

	.logo__subtitle {
		padding-top: 5px;
		font-size: 10px;
		left: 10%;
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
