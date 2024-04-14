<template>
  <div class="page-hierarchy">
    <ul>
      <li
        v-for="(header, index) in props.headers"
        :key="header"
        class="header-link-container"
      >
        <a
          class="header-link"
          :class="{ active: index == currentSection }"
          :href="`#${index}`"
          >{{ header }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useMediaQuery } from "@vueuse/core";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const currentSection = ref(0);

const isLargeScreen = useMediaQuery("(width >= 600px)");

const rootMargin = computed(() => {
  if (isLargeScreen.value) {
    return "0px 0px -70% 0px";
  } else {
    return "0px 0px -70% 0px";
  }
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute("id");
        }
      });
    },
    {
      rootMargin: rootMargin.value,
    },
  );

  document.querySelectorAll(".section__title").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

* {
  box-sizing: border-box;
}

// STYLES

.page-hierarchy {
  text-align: start;
}

.header-link-container {
  font-size: $s-font-size;
  border-left: 1px solid $secondary-color;
  padding-left: 1em;
}

.header-link {
  text-decoration: none;
  color: $secondary-color;
}

.header-link.active {
  font-weight: bold;
  border-color: black;
}
</style>
