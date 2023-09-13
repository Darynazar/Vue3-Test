<template>
    
      <HomeCompnent></HomeCompnent>
   
 
</template>

<script>
import { provide, ref } from 'vue';
import HomeCompnent from "./components/HomeComponent.vue";

export default {
  components: {
    HomeCompnent,
  },
  setup(){
    const name=ref('dary');

   provide('name',name);

    return {name};
  }
};
</script>

<style>
li {
  color: red;
}
</style>
