<template>
  <div>
    <AccordieonElement v-for="(item, index) in props.items" :key="index">
      <template #label>
        {{ item.label }}
      </template>
      <template #content>
        <PortableText :value="item.content" />
      </template>
    </AccordieonElement>
  </div>
</template>

<script setup>
import { PortableText } from "@portabletext/vue";
const props = defineProps({
  items: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
