import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/pages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/pages/Projects.vue"),
  },
  {
    path: "/contact-me",
    name: "Contact me",
    component: () => import("@/pages/ContactMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
