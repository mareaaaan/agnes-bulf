<template>
  <a
    class="instagram-link"
    href="https://www.instagram.com/agnesmariapriseceanu/"
  >
    <i-mdi-instagram class="instagram-icon" />
  </a>
</template>

<script setup></script>

<style lang="scss">
@import "../styles/_globals.scss";
.instagram-link {
  display: flex;
  align-items: center;
  justify-content: center;

  .instagram-icon {
    width: 100%;
    height: 100%;
  }

  &.dark {
    .instagram-icon {
      color: $secondary-color;
    }
  }

  &.light {
    .instagram-icon {
      color: $primary-color;
    }
  }
}
</style>
