<template>
  <div>
    <!-- Loading -->
    <div v-if="taskStore.loading" class="max-w-[640px] border-solid bg-[#ffe9a0] text-[#3a3a3a] py-[5px] text-center my-[30px] mx-auto">Loading tasks.......</div>

    <div>
      <p class="text-white text-[1rem]">Pinia</p>
      <h2 class="text-white text-[3rem]" v-for="menu in taskStore.menuItems" :key="menu.id">
        <SideMenu :menu="menu" />
      </h2>
    </div>

    <!-- New Task Form -->
    <!-- <div class="mb-5 mx-auto max-w-[200px]">
      <TaskForm />
    </div> -->

    <!-- Filter -->
    <!-- <nav class="flex items-center gap-3 text-white bg-purple-400 w-[200px] mx-auto">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favs Tasks</button>
    </nav> -->

    <!-- Task List -->
    <!-- <div class="max-w-[640px] my-[20px] mx-auto" v-if="filter === 'all'">
      <p class="text-white">You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="max-w-[640px] my-[20px] mx-0" v-if="filter === 'favs'">
      <p class="text-white">You have {{ favCount }} favs left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div> -->

    <!-- <button @click="taskStore.$reset" class="text-white">Reset</button> -->
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "../components/TaskForm.vue";
import SideMenu from "../components/SideMenu.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: { TaskDetails, TaskForm, SideMenu },
  setup() {
    const taskStore = useTaskStore();

    // const { tasks, loading, favs, totalCount, favCount, menuItems } = storeToRefs(taskStore);

    // fetch Tasks

    // taskStore.getTasks();
    taskStore.getMenu();

    // const filter = ref("all");

    return { taskStore };
  },
};
</script>
