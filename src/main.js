import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import "./css/tailwind.css";
import Testing from "./components/Testing.vue";
import TheHome from "./components/TheHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/testing", component: Testing },
    { path: "/", component: TheHome },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);
app.mount("#app");
