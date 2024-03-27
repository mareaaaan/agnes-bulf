<template>
  <a class="link-icon" :href="props.url">
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.link-icon {
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
