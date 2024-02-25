<template>
  <div class="card-carousel--card">
    <img :src="item.image" />
    <div class="card-carousel--card--footer">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow:
    0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  transition: 0.2s;

  img {
    vertical-align: bottom;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    user-select: none;
  }

  &:hover {
    transform: scale(1.1);
  }
}

.card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}

.card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
</style>
