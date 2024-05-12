<template>
  <button class="close-button" @click="$emit('click')">
    <i-ion-close class="close-icon" />
  </button>
</template>

<script setup>
defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.close-button {
  display: block;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: transform 0.3s;
  padding: 0;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
  &:hover {
    transform: scale(1.2);
  }

  .close-icon {
    width: 30px;
    height: 30px;
    transition: color 0.3s;
  }

  &.light {
    .close-icon {
      color: $primary-color;

      &:hover {
        color: lighten($primary-color, 10%);
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
