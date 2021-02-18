import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Register from "../views/Register.vue";
import Status from "../views/Status.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/about",
      name: "About",
      component: About,
   },
   {
      path: "/menu",
      name: "Menu",
      component: Menu,
   },
   {
      path: "/register",
      name: "Register",
      component: Register,
   },
   {
      path: "/status",
      name: "Status",
      component: Status,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
