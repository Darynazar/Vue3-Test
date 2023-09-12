<template>
    
      <HomeCompnent :name="name" @updateName="update"></HomeCompnent>
   
  <div>
    <h1>app.vue</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
import HomeCompnent from "./components/HomeComponent.vue";

export default {
  components: {
    HomeCompnent,
  },
  setup(){
    const name=ref('dary');

    function update(newName){
      name.value=newName;
    }

    return {name,update};
  }
};
</script>

<style>
li {
  color: red;
}
</style>
