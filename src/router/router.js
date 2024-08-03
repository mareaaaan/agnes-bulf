import * as VueRouter from "vue-router";
import { routes } from "./routes";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior: function (to, from, savedPosition) {
    let position = {};
    if (to.hash) {
      position = { selector: to.hash, behavior: "smooth" };
    } else {
      position = { top: 0, behavior: "instant" };
    }

    return position;
  },
});

export default router;
