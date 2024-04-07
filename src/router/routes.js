import HomeView from "../views/HomeView.vue";
import ServiciiView from "../views/ServiciiView.vue";

const routes = [
  {
    path: "/",
    name: "Povestea Mea",
    component: HomeView,
  },
  {
    path: "/servicii",
    name: "Servicii",
    component: ServiciiView,
  },
  { name: "Ateliere", path: "/" },
  { name: "Tender Melt", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Resurse", path: "/" },
];

export default routes;
