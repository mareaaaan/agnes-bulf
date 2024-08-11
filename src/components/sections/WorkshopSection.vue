<template>
  <TextImageSection :data="props.data">
    <template #button>
      <OpenWorkshopButton
        v-motion-fade-in-on-visible
        class="section__button"
        :workshop-name="props.data.slug.current"
      ></OpenWorkshopButton>
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
