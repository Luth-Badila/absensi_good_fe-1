<template>
  <div>
    <h2 class="text-white text-[3rem]" v-for="menu in menuItems" :key="menu.id">
      {{ menu.nama_menu }}
    </h2>
    <p class="text-white text-[1rem]">Pinia</p>

    <!-- Filter -->
    <nav class="flex items-center gap-3 text-white bg-purple-400 w-[200px]">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <!-- Task List -->
    <div class="max-w-[640px] my-[20px] mx-0" v-if="filter === 'all'">
      <p class="text-white">You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="max-w-[640px] my-[20px] mx-0" v-if="filter === 'favs'">
      <p class="text-white">You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useTaskStore } from "@/stores/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import { ref } from "vue";

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref("all");

    return { taskStore, filter };
  },
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
