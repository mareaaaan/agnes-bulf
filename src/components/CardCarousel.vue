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
import { computed, ref } from "vue";
import FeedbackCard from "src/components/FeedbackCard.vue";

const cards_pos = ref(0);

const filteredItems = computed(() => {
  return [...items, ...items].slice(cards_pos.value, cards_pos.value + 3);
});

function goNext() {
  cards_pos.value = (cards_pos.value + 1) % items.length;
}

function goPrevious() {
  cards_pos.value = (cards_pos.value + items.length - 1) % items.length;
}

const items = [
  {
    name: "Kin Khao",
    image: "https://source.unsplash.com/200x200?girl",
    id: 0,
  },
  {
    name: "Jū-Ni",
    image: "https://source.unsplash.com/200x200?natural",
    id: 1,
  },
  {
    name: "Delfina",
    image: "https://source.unsplash.com/200x200?beautiful",
    id: 2,
  },
  {
    name: "San Tung",
    image: "https://source.unsplash.com/200x200?attraction",
    id: 3,
  },
  {
    name: "Anchor Oyster Bar",
    image: "https://source.unsplash.com/200x200?rose",
    id: 4,
  },
  {
    name: "Locanda",
    image: "https://source.unsplash.com/200x200?beach",
    id: 5,
  },
  {
    name: "Garden Creamery",
    image: "https://source.unsplash.com/200x200?forest",
    id: 6,
  },
];
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
