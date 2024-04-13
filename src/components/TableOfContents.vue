<template>
  <aside ref="tableOfContents" class="table-of-contents">
    <div class="hierarchy-container">
      <h3 class="hieararchy-title">Pe această pagină</h3>
      <div class="hierarchy">
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
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  headers: Array,
});

const tableOfContents = ref(null);

const top = ref(0);

const topInPixels = computed(() => {
  return top.value + "px";
});

const currentSection = ref(0);

onMounted(() => {
  top.value = tableOfContents.value.getBoundingClientRect().top;

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

.hierarchy-container {
  position: sticky;
  top: v-bind(topInPixels);
}

// STYLES

.hierarchy-container {
  text-align: start;
}

.hieararchy-title {
  font-size: $font-size;
  margin-bottom: 0.625rem;
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
