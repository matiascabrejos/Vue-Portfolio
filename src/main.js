import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import "./css/tailwind.css";
import Testing from "./components/Testing.vue";
import TheHome from "./components/TheHome.vue";
import Test from "./components/Test.vue";
import MoreTest from "./components/MoreTest.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheHero from "./components/TheHero.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/testing", component: Testing },
    { path: "/", component: TheHome },
    { path: "/test", component: Test },
    { path: "/moretest", component: MoreTest },
    { path: "/hero", component: TheHero },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.component("the-navbar", TheNavbar);

app.use(router);
app.mount("#app");
