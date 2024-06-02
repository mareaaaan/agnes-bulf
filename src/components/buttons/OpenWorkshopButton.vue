<template>
  <BaseButton @click="navigateToWorkshopPage()">
    <slot>Află mai multe detalii</slot>
  </BaseButton>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  workshopName: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const navigateToWorkshopPage = () => {
  router.push({ name: "Workshop", params: { workshop: props.workshopName } });
};
</script>

<style lang="scss" scoped></style>
