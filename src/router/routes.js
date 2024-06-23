import PovesteaMeaView from "../views/PovesteaMeaView.vue";
import ServiciiView from "../views/ServiciiView.vue";
import WorkshopsView from "../views/WorkshopsView.vue";
import WorkshopView from "../views/WorkshopView.vue";

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
  {
    path: "/workshopuri/:workshop",
    name: "Workshop",
    component: WorkshopView,
  },
];

export default routes;
