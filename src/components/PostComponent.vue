<template>
    <div class="">
      <h1>{{ title }}</h1>
  
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum illum autem
        suscipit numquam! Omnis sint expedita ex. Nihil alias aliquam minima ullam
        modi corrupti reiciendis, officia obcaecati praesentium ipsum.
      </p>
    </div>
  </template>
    
    <script>
  import { ref } from "vue";
  export default {
    setup() {
      const title = ref("Post");
      return { title };
    },
  };
  </script>
    
    <style scoped>
  div {
    color: red;
  }
  </style>
    