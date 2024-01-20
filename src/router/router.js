import HomeView from "../views/HomeView.vue";

import * as VueRouter from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
