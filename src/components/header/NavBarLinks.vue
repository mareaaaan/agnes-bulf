<template>
  <div class="links-container">
    <li v-for="(page, index) in props.pages" :key="index" class="link">
      <RouterLink :to="{ path: page.path }">{{ page.name }} </RouterLink>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.links-container {
  background-color: $light-color;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}

.link {
  list-style: none;
  position: relative;
  padding: 0.5rem;
  margin-inline: 1rem;
}

.link > * {
  text-decoration: none;
  font-size: $xs-font-size;
  text-transform: capitalize;
  font-weight: 500;
  color: $secondary-color;

  &:hover {
    color: darken($secondary-color, 30%);
  }
}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: $secondary-color;
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
