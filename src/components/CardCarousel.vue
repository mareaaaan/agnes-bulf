<template>
  <div class="card-carousel-wrapper">
    <div
      class="card-carousel--nav__left"
      :disabled="atHeadOfList"
      @click="moveCarousel(-1)"
    ></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div
          class="card-carousel-cards"
          :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
        >
          <div v-for="item in items" :key="item.id" class="card-carousel--card">
            <img :src="item.image" />
            <div class="card-carousel--card--footer">
              <p>{{ item.name }}</p>
              <p
                v-for="(tag, index) in item.tag"
                :key="index"
                class="tag"
                :class="index > 0 ? 'secondary' : ''"
              >
                {{ tag }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card-carousel--nav__right"
      :disabled="atEndOfList"
      @click="moveCarousel(1)"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";

const currentOffset = ref(0);
const windowSize = 3;
const paginationFactor = 220;
const items = [
  {
    name: "Kin Khao",
    image: "https://source.unsplash.com/200x200?girl",
    tag: ["Thai"],
  },
  {
    name: "Jū-Ni",
    image: "https://source.unsplash.com/200x200?natural",
    tag: ["Sushi", "Japanese", "$$$$"],
  },
  {
    name: "Delfina",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Pizza", "Casual"],
  },
  {
    name: "San Tung",
    image: "https://source.unsplash.com/200x200?attraction",
    tag: ["Chinese", "$$"],
  },
  {
    name: "Anchor Oyster Bar",
    image: "https://source.unsplash.com/200x200?rose",
    tag: ["Seafood", "Cioppino"],
  },
  {
    name: "Locanda",
    image: "https://source.unsplash.com/200x200?beach",
    tag: ["Italian"],
  },
  {
    name: "Garden Creamery",
    image: "https://source.unsplash.com/200x200?forest",
    tag: ["Ice cream"],
  },
];

const atEndOfList = computed(() => {
  return (
    currentOffset.value <= paginationFactor * -1 * (items.length - windowSize)
  );
});
const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

function moveCarousel(direction) {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= paginationFactor;
  } else if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor;
  }
}
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
  width: 640px;
}
.card-carousel--overflow-container {
  overflow: hidden;
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
.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow:
    0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p.tag:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}
.card-carousel-cards .card-carousel--card--footer p.tag:after {
  content: "";
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: 0px 0px 0px #004977;
}
</style>
