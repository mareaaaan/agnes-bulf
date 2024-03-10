<template>
  <div class="modal-container">
    <div ref="expandedCard" class="modal remove-scrollbar">
      <button class="close-button" @click="$emit('closeCard')">
        <i-material-symbols-close-rounded class="close-icon" />
      </button>
      <p class="modal-container--text">{{ item.text }}</p>
      <div class="modal-container--footer">
        <p class="strong">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(["closeCard"]);

const expandedCard = ref(null);

defineExpose({
  expandedCard,
});
</script>

<style lang="scss">
@import "../styles/_globals.scss";

.close-button {
  display: block;
  background: none;
  color: inherit;
  border: none;
  width: 40px;
  height: 40px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  .close-icon {
    color: $secondary-color;
    width: 100%;
    height: 100%;
    transform: color 0.3s;

    &:hover {
      color: darken($secondary-color, 10%);
    }
  }
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #00000050;
}

.modal {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow:
    0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 2px;
  overflow-y: scroll;

  @media screen and (max-width: $mobile-width) {
    max-width: 100%;
  }
}

.modal-container--footer {
  border-top: 0;
  padding: 7px 15px;
}

.modal-container--text {
  padding: 1rem;
  margin: 0;
  user-select: none;
  font-size: $small-font-size;
}

.modal-container--footer p {
  padding: 3px 0;
  margin-bottom: 2px;
  user-select: none;
  font-size: $font-size;

  @media screen and (max-width: $mobile-width) {
    font-size: $small-font-size;
  }
}
</style>
