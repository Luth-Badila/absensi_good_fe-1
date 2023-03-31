<template>
  <form @submit.prevent="handleSubmit" class="mx-auto flex gap-3">
    <input type="text" class="p-2" placeholder="I need to ...." v-model="newTask" />
    <button class="cursor-pointer font-[1em] bg-lime-300 text-white p-2">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        newTask.value = "";
      }
    };
    return { handleSubmit, newTask };
  },
};
</script>

<style></style>
