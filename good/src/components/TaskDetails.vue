<template>
  <div class="flex justify-between">
    <h3 class="text-white">{{ task.title }}</h3>
    <div class="flex items-center text-white cursor-pointer text-[1.4rem]">
      <Icon icon="material-symbols:delete-outline-rounded" @click="taskStore.deleteTask(task.id)" />
      <Icon icon="ic:baseline-favorite-border" class="active:text-red-700" @click="taskStore.toggleFav(task.id)" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useTaskStore } from "../stores/TaskStore";
export default {
  components: { Icon },
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style></style>
