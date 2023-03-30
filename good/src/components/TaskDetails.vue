<template>
  <div class="flex justify-between">
    <h3 class="text-white">{{ task.title }}</h3>
    <div class="flex items-center text-white cursor-pointer text-[1.4rem]">
      <Icon icon="material-symbols:delete-outline-rounded" />
      <Icon icon="ic:baseline-favorite-border" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  props: ["task"],
};
</script>

<style></style>
