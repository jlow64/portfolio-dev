import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
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
