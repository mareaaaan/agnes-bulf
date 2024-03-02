<template>
  <div class="card-carousel--card">
    <p class="card-carousel--card--text">{{ ellipsify(item.text) }}</p>
    <div class="card-carousel--card--footer">
      <p class="strong">
        {{ item.title }}
      </p>
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
  if (string.length > 200) {
    return string.substring(0, 200) + "...";
  } else {
    return string;
  }
}
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
  margin-bottom: 2px;
  transition: 0.2s;

  &:hover {
    transform: rotate(-1deg);
  }
}

.card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}

.card-carousel--card--text {
  padding: 1rem;
  margin: 0;
  user-select: none;
}

.card-carousel--card--footer p {
  padding: 3px 0;
  margin-bottom: 2px;
  user-select: none;
}

.strong {
  font-weight: bold;
}
</style>
