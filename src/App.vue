<template>
  <HomeCompnent>
    <template v-slot:ul>
      <ul>
      <li v-for="(lang, index) in langs" :key="index">{{lang}}</li>
    </ul>
    </template>
   <template v-slot:div>
    <div>
      <h1>daryy</h1>
    </div>
   </template>
    
    </HomeCompnent>

  <div>
    <h1>app.vue</h1>
  </div>
</template>

<script>

import HomeCompnent from "./components/HomeComponent.vue";

export default {
  components: {
    HomeCompnent,
  },
  data() {
    return{
      langs :['php', 'js', 'cpp', 'c']
    }
  },
  methods:{
   
  },
};
</script>

<style>
li{
  color: red;
}
</style>
