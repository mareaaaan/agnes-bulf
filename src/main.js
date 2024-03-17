import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./styles/style.scss";
import "./styles/reset.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);
app.mount("#app");
