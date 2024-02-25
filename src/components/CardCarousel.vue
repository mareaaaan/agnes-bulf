<template>
  <div class="card-carousel-wrapper">
    <div class="card-carousel--nav__left" @click="goPrevious()"></div>
    <div class="card-carousel">
      <div class="card-carousel-cards">
        <FeedbackCard
          v-for="item in filteredItems"
          :key="item.id"
          :item="item"
        ></FeedbackCard>
      </div>
    </div>
    <div class="card-carousel--nav__right" @click="goNext()"></div>
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
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
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
