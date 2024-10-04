import PovesteaMeaView from "../views/PovesteaMeaView.vue";
import ServiciiView from "../views/ServiciiView.vue";
import WorkshopsView from "../views/WorkshopsView.vue";
import WorkshopView from "../views/WorkshopView.vue";
import ResurseView from "../views/ResurseView.vue";
import ContactView from "../views/ContactView.vue";

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
    name: "Resurse",
    path: "/resurse/",
    component: ResurseView,
  },
  {
    name: "Contact",
    path: "/contact/",
    component: ContactView,
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
