<template>
  <div class="icon">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.icon {
  display: flex;
  align-items: center;
  justify-content: center;

  :slotted(.icon) {
    width: 100%;
    height: 100%;
  }

  &.dark {
    :slotted(.icon) {
      color: $secondary-color;
    }
  }

  &.light {
    :slotted(.icon) {
      color: $primary-color;
    }
  }
}
</style>
