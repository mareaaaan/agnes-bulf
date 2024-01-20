<template>
  <div class="links-container">
    <button class="close-button" @click="$emit('toggleSideBar')">
      <i-material-symbols-close-rounded class="close-icon" />
    </button>
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
defineEmits(["toggleSideBar"]);
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.links-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
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
  color: $primary-color;
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
  color: $primary-color;
  width: 100%;
  height: 100%;
}
</style>
