<template>
  <div>
    <div>
      <h2 class="text-white text-[3rem]" v-for="menu in menuItems" :key="menu.id">
        {{ menu.nama_menu }}
      </h2>
      <p class="text-white text-[1rem]">Pinia</p>
    </div>

    <!-- New Task Form -->
    <div class="mb-5 mx-auto max-w-[200px]">
      <TaskForm />
    </div>

    <!-- Filter -->
    <nav class="flex items-center gap-3 text-white bg-purple-400 w-[200px] mx-auto">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <!-- Task List -->
    <div class="max-w-[640px] my-[20px] mx-auto" v-if="filter === 'all'">
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
import TaskForm from "../components/TaskForm.vue";

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref("all");

    return { taskStore, filter };
  },
  data() {
    return {
      menuItems: [],
      key1: "8C16C3D13211DB231DD030C341B1EFB5",
      key2: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiOSJ9LCJpYXQiOjE2ODAyNDM0NTcsImV4cCI6MTY4MDMyOTg1N30.htJtKHX3VriiGm_ejJ8_ksAtdl4sjMWygfftdu6Z2bY",
    };
  },
  methods: {
    getMenu() {
      fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
        method: "GET",
        headers: {
          "x-api-key": this.key1,
          "x-token": this.key2,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.data.menu_service);
          sessionStorage.setItem("menuItems", JSON.stringify(response.data.menu_service));
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },

  mounted() {
    if (sessionStorage.getItem("menuItems")) {
      this.menuItems = JSON.parse(sessionStorage.getItem("menuItems"));
    } else {
      this.getMenu().then((data) => (this.menuItems = data.data.menu_service));
    }
  },
};
</script>
