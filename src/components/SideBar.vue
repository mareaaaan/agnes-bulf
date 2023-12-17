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

<script>
export default {
	name: "SideBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;200;300;400;500;600;700&display=swap");
.links-container {
	position: absolute;
	height: 100%;
	background-color: black;
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
	margin-top: 40px;
}

.link {
	font-family: "Josefin Slab", serif;
	font-weight: 600;
	text-transform: capitalize;
	font-size: 20px;
	color: white;
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
	color: white;
	width: 100%;
	height: 100%;
}
</style>
