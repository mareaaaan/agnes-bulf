import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./styles/style.scss";
import "./styles/reset.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin, {
  directives: {
    "fade-in-on-visible": {
      initial: {
        opacity: 0,
      },
      visibleOnce: {
        opacity: 1,
        transition: {
          duration: 1000,
          ease: "easeInOut",
        },
      },
    },
  },
});
app.mount("#app");
