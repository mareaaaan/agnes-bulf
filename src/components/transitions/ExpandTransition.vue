<template>
  <Transition name="expand">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: transform 0.2s ease-out;
}

.expand-enter-from,
.expand-leave-to {
  transform: translateY(-100%);
}
</style>
