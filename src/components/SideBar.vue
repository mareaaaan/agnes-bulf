<template>
  <SlideTransition @after-enter="onAfterEnter" @leave="onLeave">
    <ul class="sidebar-container">
      <CloseButton
        class="position-top-right light"
        @click="$emit('toggleSideBar')"
      />
      <li v-for="(page, index) in props.pages" :key="index" class="link">
        <RouterLink :to="{ path: page.path }">{{ page.name }} </RouterLink>
      </li>
      <div class="social-links">
        <InstagramLink class="light link-icon" />
        <FacebookLink class="light link-icon" />
        <YoutubeLink class="light link-icon" />
      </div>
    </ul>
  </SlideTransition>
</template>

<script setup>
import SlideTransition from "src/components/transitions/SlideTransition.vue";
import CloseButton from "./CloseButton.vue";
import InstagramLink from "./InstagramLink.vue";
const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

defineEmits(["toggleSideBar"]);

function onAfterEnter() {
  document.querySelector("main").style.display = "none";
}

function onLeave() {
  document.querySelector("main").style.display = "flex";
}
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.sidebar-container {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
}

.link {
  list-style: none;
  width: min(50%, 300px);
  text-align: center;
  padding: 2em;
  border-bottom: 0.5px solid white;
}

.link > * {
  text-decoration: none;
  text-transform: uppercase;
  font-size: $l-font-size;
  font-weight: 500;
  color: $primary-color;
}

.link:first-of-type {
  border-top: 0.5px solid white;
}

.position-top-right {
  position: absolute;
  top: 0;
  right: 0;
}

.link-icon {
  width: 30px;
  height: 30px;
  padding: 1em;
}

.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
}
</style>
