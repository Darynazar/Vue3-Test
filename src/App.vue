<template>
  <HomeCompnent :userInfo="userInfo" @childData="showData($event)" />

  <div>
    <h1>app.vue</h1>
  </div>
</template>

<script>
import { provide } from 'vue';
import HomeCompnent from "./components/HomeComponent.vue";

export default {
  components: {
    HomeCompnent,
  },
  data() {
    return {
      userInfo: {
        name: "darynazar",
        lastname: "heydari",
      },
    };
  },
  methods:{
    showData(name){
      this.userInfo.name = name

      console.log(name)
    }
  },
  provide: {
    user: 'ali',
    data: 'test'
  }
};
</script>

<style>
</style>
