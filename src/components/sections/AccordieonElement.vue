<template>
  <div class="container" @click="isActive = !isActive">
    <div class="label section__title">
      <slot name="label"></slot>
    </div>

    <div :class="{ active: isActive }" class="content-contaier">
      <div class="content section__text">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.container {
  padding-block: 1rem;
}

.label {
  position: relative;
  font-size: $xl-font-size;
  cursor: pointer;
  margin-bottom: 1rem;
}

.content-contaier {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease-out;

  &.active {
    grid-template-rows: 1fr;
  }
}

.content {
  text-align: justify;
  overflow: hidden;
}

hr {
  border: 0.5px solid lightgray;
}
</style>
