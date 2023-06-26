import { createRouter, createWebHistory } from "vue-router";
import AuthenticationPage from "../pages/AuthenticationPage.vue";
import HomePageView from "../pages/HomePageView.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePageView,
  },
  {
    name: "authentication",
    path: "/authentication",
    component: AuthenticationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
