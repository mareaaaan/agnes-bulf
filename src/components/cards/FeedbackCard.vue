<template>
  <div ref="card" class="card-carousel--card" @click="expandCard">
    <p class="card-carousel--card--text">
      {{ truncatedText }}
      <span v-if="isTextTruncated" class="show-more">...citește mai mult</span>
    </p>
    <div class="card-carousel--card--footer">
      <strong>{{ item.title }}</strong>
    </div>
    <Teleport to="#app">
      <BlurTransition>
        <FeedbackCardModal
          v-if="isCardExpanded"
          ref="expandedCard"
          :item="item"
          @close-card="closeCard"
        />
      </BlurTransition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { illusory } from "illusory";
import FeedbackCardModal from "./FeedbackCardModal.vue";
import BlurTransition from "src/components/transitions/BlurTransition.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const card = ref(null);
const expandedCard = ref(null);

const isCardExpanded = ref(false);
function expandCard() {
  isCardExpanded.value = true;
}

function closeCard() {
  illusory(expandedCard.value.expandedCard, card.value, {
    async beforeAnimate(from, to) {
      to.showNatural();
      document.body.style.overflow = "auto";
      isCardExpanded.value = false;
    },
    zIndex: 3,
  });
}

watch(expandedCard, (newExpandedCard) => {
  if (newExpandedCard) {
    illusory(card.value, newExpandedCard.expandedCard, {
      async beforeAnimate(from) {
        document.body.style.overflow = "hidden";
        from.showNatural();
      },
      zIndex: 3,
    });
  }
});

function ellipsify(string) {
  if (string.length > 200) {
    return string.substring(0, 200);
  } else {
    return string;
  }
}

const truncatedText = computed(() => ellipsify(props.item.text));
const isTextTruncated = computed(() => props.item.text.length > 200);
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.card-carousel--card {
  display: flex;
  flex-direction: column;
  margin-inline: 10px;
  margin-block-end: 2px;
  cursor: pointer;
  box-shadow:
    0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  transition: 0.2s;
  user-select: none;

  &:hover {
    transform: rotate(-1deg);
  }
}

.card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
  margin-block-end: 2px;
  font-weight: bold;

  @media screen and (max-width: $mobile-width) {
    font-size: $s-font-size;
  }
}

.card-carousel--card--text {
  flex-grow: 1;
  padding: 1rem;
  font-size: $s-font-size;
  text-align: start;

  .show-more {
    font-weight: bold;
    font-style: italic;
  }
}
</style>
