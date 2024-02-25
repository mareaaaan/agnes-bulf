<template>
  <div class="card-carousel--card">
    <p class="card-carousel--card--text">{{ ellipsify(item.text) }}</p>
    <div class="card-carousel--card--footer">
      <p>{{ item.title }}</p>
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

function ellipsify(string) {
  if (string.length > 100) {
    return string.substring(0, 100) + "...";
  } else {
    return string;
  }
}
</script>

<style lang="scss" scoped>
.card-carousel--card {
  max-width: 300px;
  min-height: 200px;
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

  &:hover {
    transform: scale(1.1);
  }
}

.card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}

.card-carousel--card--text {
  padding: 1rem;
  margin: 0;
  font-size: 1rem;
  user-select: none;
}

.card-carousel--card--footer p {
  padding: 3px 0;
  margin-bottom: 2px;
  font-size: 1.125rem;
  user-select: none;
}
</style>
