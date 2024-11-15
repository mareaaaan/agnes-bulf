<template>
  <div class="container" @click="isActive = !isActive">
    <div class="label-container">
      <div class="label__text">
        <slot name="label__text"></slot>
      </div>
      <div class="label__icon">
        <ExpandIcon
          class="expand-icon"
          :class="{ expanded: isActive }"
        ></ExpandIcon>
      </div>
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

.label-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: $l-font-size;
  cursor: pointer;
  margin-bottom: 1rem;
}

.label__text {
  text-align: start;
}

.expand-icon {
  min-width: 25px;
  min-height: 25px;
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
