<template>
  <TextImageSection :data="props.data">
    <template #button>
      <ContactButton v-motion-fade-in-on-visible class="section__button">
        Programează o ședință
      </ContactButton>
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

<style lang="scss" scoped></style>
