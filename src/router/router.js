import * as VueRouter from "vue-router";
import routes from "./routes";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "instant" };
  },
});

export default router;
