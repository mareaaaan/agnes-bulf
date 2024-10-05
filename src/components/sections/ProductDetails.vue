<template>
  <div v-motion-fade-in-on-visible class="details-container">
    <div class="detail">
      <BaseIcon class="icon dark">
        <i-material-symbols-location-on-outline-rounded class="icon" />
      </BaseIcon>
      <p class="detail__text">
        {{ props.details.location.locationAddress }}
      </p>
    </div>
    <div class="detail">
      <BaseIcon class="icon dark">
        <i-material-symbols:calendar-today-outline-sharp class="icon" />
      </BaseIcon>
      <p class="detail__text">{{ props.details.date }}</p>
    </div>
    <div class="detail">
      <BaseIcon class="icon dark">
        <i-material-symbols:nest-clock-farsight-analog-outline-rounded
          class="icon"
        />
      </BaseIcon>
      <p class="detail__text">{{ props.details.duration }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  details: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.details-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detail {
  display: flex;
  width: 100%;
  height: 100%;
}

.icon {
  padding: 0.625rem;
}

.text {
  font-weight: bold;
  text-align: left;
  align-self: center;
  margin-block-end: 0 !important;
}
</style>
