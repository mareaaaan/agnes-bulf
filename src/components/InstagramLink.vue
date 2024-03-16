<template>
  <a
    class="instagram-link"
    href="https://www.instagram.com/agnesmariapriseceanu/"
  >
    <i-mdi-instagram class="instagram-icon" />
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
a:link,
a:visited {
  text-decoration: none;
}

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
