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
import { ref, onMounted } from "vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const currentSection = ref(0);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute("id");
          console.log(currentSection.value);
        }
      });
    },
    {
      rootMargin: "0px 0px -90% 0px",
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
  padding-left: 2em;
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
