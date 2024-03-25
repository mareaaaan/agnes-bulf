<template>
  <section class="text-container">
    <div class="wrapper" :class="{ 'max-width': props.maxWidth }">
      <slot name="text"></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  maxWidth: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:slotted(p) {
  max-width: 80%;
}
</style>
