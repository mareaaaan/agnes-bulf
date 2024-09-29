<template>
  <section
    class="section--base section-grid"
    :class="props.data.orientation === 'right' ? 'right' : 'left'"
  >
    <div v-motion-fade-in-on-visible class="section__image">
      <slot name="image">
        <img
          :src="imageBuilder.image(props.data.image)"
          :alt="props.data.image.alt"
          class="oval-border"
        />
      </slot>
    </div>
    <div v-motion-fade-in-on-visible class="section__description">
      <slot name="text">
        <PortableText :value="props.data.text" />
        <div
          v-if="props.data.details"
          v-motion-fade-in-on-visible
          class="details-container"
        >
          <div class="detail">
            <BaseIcon class="icon dark">
              <i-material-symbols-location-on-outline-rounded class="icon" />
            </BaseIcon>
            <p class="text">
              {{ props.data.details.location.locationAddress }}
            </p>
          </div>
          <div class="detail">
            <BaseIcon class="icon dark">
              <i-material-symbols:calendar-today-outline-sharp class="icon" />
            </BaseIcon>
            <p class="text">{{ props.data.details.date }}</p>
          </div>
          <div class="detail">
            <BaseIcon class="icon dark">
              <i-material-symbols:nest-clock-farsight-analog-outline-rounded
                class="icon"
              />
            </BaseIcon>
            <p class="text">{{ props.data.details.duration }}</p>
          </div>
        </div>
      </slot>
    </div>
    <slot name="button"> </slot>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { imageBuilder } from "src/client";
import { PortableText } from "@portabletext/vue";

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

.section-grid.left {
  .section__image {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 1 / 8;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 7;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 6;
    }
  }

  .section__description {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 8 / 13;
    }

    @media (width >= $tablet-width) {
      grid-column: 7 / 13;
    }

    @media (width >= $desktop-width) {
      grid-column: 6 / 13;
    }
  }
}

.section-grid.right {
  .section__image {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 6 / 13;
    }

    @media (width >= $tablet-width) {
      grid-column: 7 / 13;
    }

    @media (width >= $desktop-width) {
      grid-column: 8 / 13;
    }
  }

  .section__description {
    @media (width >= $mobile-width) {
      grid-row: 1 / 2;
      grid-column: 1 / 6;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 7;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 8;
    }
  }
}

// STYLES

.section__description {
  align-content: center;
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
  font-weight: bold;
  text-align: left;
  align-self: center;
  margin-block-end: 0 !important;
}
</style>
