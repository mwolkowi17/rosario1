import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RosarioPage from "@/views/RosarioPage.vue";
import AboutRosarioPage from "@/views/AboutRosarioPage.vue";
import Mysterios from "@/views/Mysterios.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/rosario",
    name: "Rosario",
    component: RosarioPage,
  },
  {
    path: "/about_rosario",
    name: "AboutRosario",
    component: AboutRosarioPage,
  },
  {
    path: "/mysterios",
    name: "Mysterios",
    component: Mysterios,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
