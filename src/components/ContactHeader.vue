<template>
  <aside class="contact-container">
    <div class="contact max-width">
      <span>Urmărește-mă pe:</span>
      <InstagramLink class="instagram-link dark" />
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";
.contact-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;

  @media screen and (max-width: $desktop-width) {
    display: none;
  }
}

.contact {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: $secondary-color;
  font-size: 0.9375rem;
  padding: 0 1rem;
}

.instagram-link {
  padding: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}
</style>
