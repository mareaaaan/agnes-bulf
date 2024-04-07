import { useScroll } from "@vueuse/core";
import { ref } from "vue";

export default function useScrollUp() {
  const isScrollUp = ref(true);

  let lastScrollPosition = 0;

  useScroll(window, {
    onScroll: (e) => {
      onScroll(e);
    },
  });

  function update(currentScrollPosition) {
    isScrollUp.value = currentScrollPosition < lastScrollPosition;
    lastScrollPosition = currentScrollPosition;
  }

  function onScroll() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < 0) {
      return;
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than the offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < 100) {
      return;
    }

    update(currentScrollPosition);
  }

  return { isScrollUp };
}
