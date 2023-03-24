import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";

//createApp(App).use(createPinia())
const pinia = createPinia();
createApp(App).use(router, Icon).use(VueApexCharts).use(pinia).use(PerfectScrollbar).mount("#app");

// router.beforeEach((to, from, next) => {
//   document.querySelector(".flex-sidebar").classList.add("hidden");
//   next();
// });
