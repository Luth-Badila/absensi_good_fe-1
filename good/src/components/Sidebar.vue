<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800 flex-sidebar lg:flex-auto w-sidebar lg:block hidden border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed">
    <!-- sidebar head -->
    <div class="sidebar-head p-4 w-full">
      <router-link to="/" exact>
        <h2 class="text-2xl font-normal text-gray-800 dark:text-gray-500" translate="no">
          iHadir-2<span class="text-primary"></span>
          <span class="bg-gray-700 absolute mt-2 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200">Dark mode</span>
        </h2>
      </router-link>
      <button class="lg:hidden block float-right -mt-7 -mr-2" @click="sidebarToggle">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path fill="currentColor" d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4">
      <p class="font-medium text-gray-400 dark:text-gray-600">Menu</p>
      <div class="wrap-item mt-4 dark:text-gray-500">
        <div class="item">
          <router-link to="/" exact class="w-full flex justify-center items-center text-left rounded-md box-border p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
            <span class="w-full"> Dashboard </span>
          </router-link>
        </div>
      </div>

      <div class="item mt-3">
        <menu-accordion v-for="menu in menuItems" :key="menu.id">
          <template v-slot:icon>
            <Icon icon="gg:components" />
          </template>
          <template v-slot:title> {{ menu.nama_menu }} </template>
          <template v-slot:content>
            <router-link :to="menu.path" class="w-full text-left block rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-700"> Alert </router-link>
          </template>
        </menu-accordion>
      </div>
    </div>
  </nav>
</template>
<style>
/* .active {
  } */
</style>
<script>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";
export default {
  components: {
    Icon,
    MenuAccordion,
  },
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
    sidebarToggle: function () {
      document.querySelector(".flex-sidebar").classList.add("hidden");
    },
    getMenu() {
      fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
        method: "GET",
        headers: {
          "x-api-key": "8C16C3D13211DB231DD030C341B1EFB5",
          "x-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiOSJ9LCJpYXQiOjE2ODAxNTQ5NjAsImV4cCI6MTY4MDI0MTM2MH0.DFB9FFCQtZEJB7WZxOXlCY96Ok_zNssZhisjyq5QMxY",
        },
      })
        .then((response) => response.json())
        .then((menu) => {
          console.log(menu.data.menu_service[0].nama_menu);
          this.menuItems = menu.data.menu_service;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  mounted() {
    this.getMenu();
  },
};
</script>
