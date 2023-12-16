<template>
	<nav class="navbar-container">
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
<script>
export default {
	name: "NavBar",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Whisper&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap");

.navbar-container {
	position: fixed;
	width: 100%;
	top: 0;
	background-color: white;
	display: flex;
	flex-direction: column;
	gap: 10px;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
	box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
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

a:link {
	text-decoration: none;
}

a:visited {
	text-decoration: none;
}

.link {
	font-family: "Kalam", cursive;
	font-weight: 300;
	text-transform: uppercase;
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
	border-radius: 2px;
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
</style>
