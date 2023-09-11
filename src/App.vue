<template>

 <HomeCompnent :userInfo="userInfo"/>

 <div>
  <h1>app.vue</h1>
 </div>
</template>

<script>
import HomeCompnent from './components/HomeComponent.vue';

export default {
 components: {
  HomeCompnent
 },
 data(){
  return {
    userInfo: {
      name:'darynazar',
    lastname:'heydari',
  }
    }
   
 }
};
</script>

<style>

</style>
