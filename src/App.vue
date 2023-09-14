<template>
    
      <!-- <HomeCompnent></HomeCompnent> -->
      <router-link class="mr-2" to="/">HomeComponent</router-link>
      <router-link class="mr-2" to="/users">UserComponent</router-link>
      <router-link to="/posts">PostComponent</router-link>
   <hr>
   <router-view></router-view>
 
</template>

<script>

export default {
  
  setup(){
    return {};
  }
};
</script>

<style>
.mr-2{
  margin-right: 2rem;
}
</style>
