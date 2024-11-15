<template>
  <BaseButton @click="navigateToContactPage()">
    <slot>Contactează-mă</slot>
  </BaseButton>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToContactPage = () => {
  router.push({ name: "Contact" });
};
</script>

<style lang="scss" scoped></style>
