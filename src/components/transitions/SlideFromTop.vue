<template>
  <Transition name="slideFromTop">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style>
.slideFromTop-enter-active,
.slideFromTop-leave-active {
  transition: transform 0.2s ease-out;
}

.slideFromTop-enter-from,
.slideFromTop-leave-to {
  transform: translateY(-100%);
}
</style>
