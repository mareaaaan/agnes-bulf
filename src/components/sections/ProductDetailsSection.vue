<template>
  <section class="section--base section-grid">
    <div v-motion-fade-in-on-visible class="details-container">
      <div class="detail">
        <BaseIcon class="icon dark">
          <i-material-symbols-location-on-outline-rounded class="icon" />
        </BaseIcon>
        <p class="text">{{ props.data.location.locationAddress }}</p>
      </div>
      <div class="detail">
        <BaseIcon class="icon dark">
          <i-material-symbols:calendar-today-outline-sharp class="icon" />
        </BaseIcon>
        <p class="text">{{ props.data.date }}</p>
      </div>
      <div class="detail">
        <BaseIcon class="icon dark">
          <i-material-symbols:nest-clock-farsight-analog-outline-rounded
            class="icon"
          />
        </BaseIcon>
        <p class="text">{{ props.data.duration }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.section-grid {
  container-type: inline-size;
}

.details-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

// STYLES
.detail {
  display: flex;
  width: 100%;
  height: 100%;
}

.icon {
  padding: 0.625rem;
}

.text {
  font-size: $xs-font-size;
  font-weight: bold;
  text-align: left;
  align-self: center;
}
</style>
