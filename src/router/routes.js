import PovesteaMeaView from "../views/PovesteaMeaView.vue";
import ServiciiView from "../views/ServiciiView.vue";
import WorkshopsView from "../views/WorkshopsView.vue";
import WorkshopView from "../views/WorkshopView.vue";

const topLevelRoutes = [
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
    name: "Workshopuri",
    path: "/workshopuri/",
    component: WorkshopsView,
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

const routes = [
  ...topLevelRoutes,
  {
    path: "/workshopuri/:workshop",
    name: "Workshop",
    component: WorkshopView,
  },
];

export { topLevelRoutes, routes };
