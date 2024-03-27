<template>
  <div class="links-container">
    <a
      v-for="(page, index) in props.pages"
      :key="index"
      class="link"
      :href="page.path"
      >{{ page.name }}</a
    >
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
@import "../styles/_globals.scss";

.links-container {
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}

.link {
  font-weight: 500;
  text-transform: capitalize;
  font-size: 0.9375rem;
  color: $secondary-color;
  position: relative;
  padding: 0.625rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
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
