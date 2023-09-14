import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import UserComponent from "./components/UserComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/users", component: UserComponent },
  { path: "/posts", component: PostComponent },
];

const router = createRouter({
    history: createWebHistory(),
  routes,
});

export default router;
