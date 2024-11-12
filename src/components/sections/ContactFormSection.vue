<template>
  <TextImageSection :data="props.data">
    <template #button>
      <OpenFormButton
        v-motion-fade-in-on-visible
        class="section__button"
      ></OpenFormButton>
    </template>
  </TextImageSection>
</template>

<script setup>
import TextImageSection from "./TextImageSection.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
</style>
