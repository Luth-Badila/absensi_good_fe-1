<template>
    <div>
      <button-item v-for="(button, index) in buttons" :key="index" :label="button.label"></button-item>
    </div>
  </template>
  
  <script>
  import ButtonItem from './Tombol.vue';
  
  export default {
    components: {
      ButtonItem
    },
    props: {
      buttons: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  