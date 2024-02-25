<template>
  <div class="card-carousel-wrapper">
    <button class="card-carousel--nav" @click="goPrevious()">
      <i-material-symbols-arrow-back-ios-new class="arrow-icon" />
    </button>
    <div class="card-carousel">
      <div class="card-carousel-cards">
        <FeedbackCard
          v-for="item in filteredItems"
          :key="item.id"
          :item="item"
        ></FeedbackCard>
      </div>
    </div>
    <button class="card-carousel--nav" @click="goNext()">
      <i-material-symbols-arrow-forward-ios class="arrow-icon" />
    </button>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import FeedbackCard from "src/components/FeedbackCard.vue";

const cards_pos = ref(0);

const filteredItems = computed(() => {
  return [...items.value, ...items.value].slice(
    cards_pos.value,
    cards_pos.value + 3,
  );
});

function goNext() {
  cards_pos.value = (cards_pos.value + 1) % items.value.length;
}

function goPrevious() {
  cards_pos.value =
    (cards_pos.value + items.value.length - 1) % items.value.length;
}

const items = ref([]);

function fetchItems() {
  const filePath = "src/assets/feedbackData.json";
  fetch(filePath)
    .then((response) => response.json())
    .then((jsonArray) => {
      console.log(jsonArray);
      items.value = jsonArray;
    })
    .catch((error) => console.error("Error fetching feedbackData", error));
}

onMounted(() => {
  fetchItems();
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-carousel {
  display: flex;
  justify-content: center;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.card-carousel--nav {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 20px;
  transition: 200ms linear;
}

.card-carousel--nav:hover {
  transform: scale(1.1);
  color: darken($secondary-color, 10%);
}

.arrow-icon {
  height: 100%;
  width: 100%;
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
</style>
