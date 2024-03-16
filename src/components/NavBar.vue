<script setup>
import SlideFromTop from "src/components/transitions/SlideFromTop.vue";
import { defineProps, ref } from "vue";
import PageHeader from "./PageHeader.vue";
import NavBarLinks from "./NavBarLinks.vue";
import useScrollUp from "src/composables/scrollUp";

const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["toggleSideBar"]);

const isSideBarOpen = ref(false);

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  emit("toggleSideBar");
}

const { isScrollUp } = useScrollUp();
</script>

<template>
  <nav>
    <aside class="contact-container">
      <div class="contact max-width">
        <span>Urmărește-mă pe:</span>
        <InstagramLink class="instagram-link dark" />
      </div>
    </aside>
    <PageHeader @toggle-side-bar="toggleSideBar" />
    <SlideFromTop>
      <NavBarLinks v-show="isScrollUp" :pages="props.pages" />
    </SlideFromTop>
  </nav>
  <Teleport to="body">
    <SideBar
      v-show="isSideBarOpen"
      :pages="props.pages"
      @toggle-side-bar="toggleSideBar"
    />
  </Teleport>
</template>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
nav {
  position: sticky;
  top: 0;
  z-index: 2;
}

.contact {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: $secondary-color;
  font-size: 0.9375rem;
  padding: 0 1rem;
}

.contact-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;

  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}

.instagram-link {
  padding: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}

a:link,
a:visited {
  text-decoration: none;
}
</style>
