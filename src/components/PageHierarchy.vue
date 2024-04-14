<template>
  <div class="page-hierarchy">
    <ul>
      <li
        v-for="(header, index) in props.headers"
        :key="header"
        :class="{ active: index == currentSection }"
        class="header-link-container"
      >
        <a class="header-link" :href="`#${index}`">{{ header }}</a>
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
  padding-block-end: 1rem;
}

.header-link-container {
  font-size: $s-font-size;
  border-left: 1px solid $secondary-color;
  padding-left: 1em;
}

.header-link-container.active {
  border-color: black;
  border-left-width: 2px;
  & .header-link {
    font-weight: bold;
  }
}

.header-link {
  text-decoration: none;
  color: $secondary-color;
}
</style>
