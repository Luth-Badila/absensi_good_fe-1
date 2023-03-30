<template>
  <div>
    <h2 class="text-white text-[3rem]" v-for="menu in menuItems" :key="menu.id">
      {{ menu.nama_menu }}
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
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
