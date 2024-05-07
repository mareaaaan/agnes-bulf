<template>
  <a class="base-button">
    <slot></slot>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.base-button {
  background-color: $light-color;
  color: $secondary-color;
  font-size: $xs-font-size;
  border-radius: 10em;
  padding-block: 1em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid $secondary-color;
  box-shadow: 0 0 0 0 $secondary-color;
}

.base-button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 $secondary-color;
}

.base-button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 $secondary-color;
}
</style>
