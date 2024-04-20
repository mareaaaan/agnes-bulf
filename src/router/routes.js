import HomeView from "../views/HomeView.vue";
import ServiciiView from "../views/ServiciiView.vue";
import PovesteaMeaView from "../views/PovesteaMeaView.vue";

const routes = [
  {
    path: "/",
    name: "Povestea Mea",
    component: HomeView,
  },
  {
    path: "/servicii/",
    name: "Servicii",
    component: ServiciiView,
  },
  {
    name: "Ateliere",
    path: "/povestea_mea/",
    component: PovesteaMeaView,
  },
  {
    name: "Tender Melt",
    path: "/",
    component: HomeView,
  },
  {
    name: "Blog",
    path: "/",
    component: HomeView,
  },
  {
    name: "Resurse",
    path: "/",
    component: HomeView,
  },
];

export default routes;
