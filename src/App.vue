<template>
  
    <ul>
      <li v-for="(userName, index) in userNames" :key="index">
        {{ userName }}
      </li>
    </ul>
    <hr>
    <teleport to="#teleport-target">
      <HomeCompnent></HomeCompnent>
    </teleport>

  

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
    return {
      userNames: ["ali", "nima", "navid"],
    };
  },
  methods: {},
};
</script>

<style>
li {
  color: red;
}
</style>
