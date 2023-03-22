<template>
  <div>
    <button class="w-full box-border flex gap-4" @click="onClick">
      <span>
        <img src="../assets/img/user1.png" alt="" width="50" height="50" class="rounded-full" />
      </span>
      <span class="text-left">
        <h1 class="font-bold text-xl dark:text-gray-200">
          {{ label }}
        </h1>
        <p class="text-gray-400 dark:text-gray-200">online</p>
      </span>
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    nama: String,
    label: String,
  },
  methods: {
    onClick() {
      console.log("TES OK");
    },
  },
};
</script>
