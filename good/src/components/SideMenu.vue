<template>
  <div class="item mt-3">
    <router-link exact :to="menu.path" class="w-full text-left block rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex items-center">
        <span class="mr-3 text-xl"> <Icon icon="gg:components" /></span>
        <span class="w-full"> {{ menu.nama_menu }} </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useTaskStore } from "../stores/TaskStore";

export default {
  props: ["menu"],
  components: { Icon },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style></style>
