<template>
  <SlideTransition @after-enter="onAfterEnter" @leave="onLeave">
    <ul class="sidebar-container">
      <CloseButton
        class="position-top-right light"
        @click="$emit('toggleSideBar')"
      />
      <li v-for="(page, index) in props.pages" :key="index" class="link">
        <RouterLink :to="{ path: page.path }" @click="$emit('toggleSideBar')"
          >{{ page.name }}
        </RouterLink>
      </li>
      <SocialLinks :is-dark="false" class="social-links" />
    </ul>
  </SlideTransition>
</template>

<script setup>
import SlideTransition from "src/components/transitions/SlideTransition.vue";
import CloseButton from "src/components/buttons/CloseButton.vue";
import SocialLinks from "src/components/links/SocialLinks.vue";
const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

defineEmits(["toggleSideBar"]);

function onAfterEnter() {
  document.querySelector("body").style.overflow = "hidden";
}

function onLeave() {
  document.querySelector("body").style.overflow = "auto";
}
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.sidebar-container {
  position: fixed;
  z-index: 3;
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
  padding-block: 2em;
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

:deep(.link-icon) {
  width: 60px;
  height: 60px;
  padding: 1em;
}

.social-links {
  margin-top: 2em;
}
</style>
