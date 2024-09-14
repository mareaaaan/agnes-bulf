<template>
  <div class="carousel-container">
    <div
      ref="mediaScroller"
      class="media-scroller snaps-inline remove-scrollbar"
    >
      <FeedbackCard v-for="item in props.items" :key="item.id" :item="item" />
    </div>

    <div class="button-group">
      <button class="card-carousel--nav" @click="scrollLeft">
        <i-material-symbols-arrow-back-ios-new class="arrow-icon" />
      </button>
      <button class="card-carousel--nav" @click="scrollRight">
        <i-material-symbols-arrow-forward-ios class="arrow-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import FeedbackCard from "src/components/cards/FeedbackCard.vue";
import { ref, computed } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const mediaScroller = ref(null);
const cardWidth = computed(() => {
  return mediaScroller.value.firstElementChild.offsetWidth + 20;
});

function scrollLeft() {
  if (mediaScroller.value.scrollLeft === 0) {
    mediaScroller.value.scrollBy({
      left: mediaScroller.value.scrollWidth - mediaScroller.value.offsetWidth,
      behavior: "smooth",
    });
  } else {
    mediaScroller.value.scrollBy({
      left: -1 * cardWidth.value,
      behavior: "smooth",
    });
  }
}

function scrollRight() {
  if (
    mediaScroller.value.scrollLeft + mediaScroller.value.offsetWidth ===
    mediaScroller.value.scrollWidth
  ) {
    mediaScroller.value.scrollBy({
      left: -1 * mediaScroller.value.scrollWidth,
      behavior: "smooth",
    });
  } else {
    mediaScroller.value.scrollBy({
      left: cardWidth.value,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
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
  height: 100%;
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

.carousel-container {
  display: flex;
  flex-direction: column;
}
.media-scroller {
  --items-per-screen: 3;
  --spacer: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(100% / var(--items-per-screen));

  padding: var(--spacer) 0;
  margin-bottom: var(--spacer);
  overflow-x: auto;
  overscroll-behavior-inline: contain;

  @media screen and (max-width: $mobile-width) {
    --items-per-screen: 1;
  }
}

.snaps-inline > * {
  scroll-snap-align: start;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--spacer);
}
</style>
