<template>
  <button class="close-button" @click="$emit('click')">
    <i-material-symbols-close-rounded class="close-icon" />
  </button>
</template>

<script setup>
defineEmits(["click"]);
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
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  .close-icon {
    width: 100%;
    height: 100%;
    transition: color 0.3s;
  }

  &.light {
    .close-icon {
      color: $primary-color;

      &:hover {
        color: darken($secondary-color, 10%);
      }
    }
  }

  &.dark {
    .close-icon {
      color: $secondary-color;

      &:hover {
        color: darken($secondary-color, 10%);
      }
    }
  }
}
</style>
