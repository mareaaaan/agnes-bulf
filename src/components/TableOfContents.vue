<template>
  <aside ref="tableOfContents" class="table-of-contents">
    <div class="table-of-contents--hierarchy">
      <h3>Pe această pagină</h3>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const tableOfContents = ref(null);

const top = ref(0);

const topInPixels = computed(() => {
  return top.value + "px";
});

onMounted(() => {
  top.value = tableOfContents.value.getBoundingClientRect().top;
  console.log(top.value);
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

// LAYOUT

* {
  box-sizing: border-box;
}

.table-of-contents--hierarchy {
  position: sticky;
  top: v-bind(topInPixels);
}

// STYLES

.table-of-contents--hierarchy {
  padding: 1rem;
}
</style>
