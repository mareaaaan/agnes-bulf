import PovesteaMeaView from "../views/PovesteaMeaView.vue";
import ServiciiView from "../views/ServiciiView.vue";

const routes = [
  {
    path: "/",
    name: "Povestea Mea",
    component: PovesteaMeaView,
  },
  {
    path: "/servicii/",
    name: "Servicii",
    component: ServiciiView,
  },
  {
    name: "Ateliere",
    path: "/",
    component: PovesteaMeaView,
  },
  {
    name: "Tender Melt",
    path: "/",
    component: PovesteaMeaView,
  },
  {
    name: "Blog",
    path: "/",
    component: PovesteaMeaView,
  },
  {
    name: "Resurse",
    path: "/",
    component: PovesteaMeaView,
  },
];

export default routes;
