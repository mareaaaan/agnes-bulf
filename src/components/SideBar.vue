<template>
  <SlideTransition @after-enter="onAfterEnter" @leave="onLeave">
    <ul class="sidebar-container">
      <CloseButton
        class="position-top-right light"
        @click="$emit('toggleSideBar')"
      />
      <a
        v-for="(page, index) in props.pages"
        :key="index"
        class="link"
        :href="page.path"
        >{{ page.name }}
      </a>
      <a
        class="instagram-link"
        href="https://www.instagram.com/agnesmariapriseceanu/"
      >
        <i-mdi-instagram class="instagram-icon" />
      </a>
    </ul>
  </SlideTransition>
</template>

<script setup>
import SlideTransition from "src/components/transitions/SlideTransition.vue";
import CloseButton from "./CloseButton.vue";
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

a:link,
a:visited {
  text-decoration: none;
}

.link {
  font-weight: 500;
  width: min(50%, 300px);
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  color: $primary-color;
  padding: 2em;
  border-bottom: 0.5px solid white;
}

.link:first-of-type {
  border-top: 0.5px solid white;
}

.position-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

.instagram-link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  width: 40px;
  height: 40px;
}

.instagram-icon {
  color: $primary-color;
  width: 100%;
  height: 100%;
}
</style>
