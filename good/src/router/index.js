import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "../views/Dashboard.vue";
// Component Pages
import Valert from "../views/components/alert.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vbreadcumb from "../views/components/breadcumbs.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Try from "../views/Try.vue";
let appname = " - iHadir-2";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },

  // Components based Routes
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login" + appname },
  },
  {
    path: "/try",
    name: "Try",
    component: Try,
    meta: { title: "Try" + appname },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "Register" + appname },
  },
  {
    path: "/menuB",
    name: "Valert",
    component: Valert,
    meta: { title: "Alert" + appname },
  },
  {
    path: "/SMK",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: Vbreadcumb,
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
];

const router = createRouter({
  mode: history,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
