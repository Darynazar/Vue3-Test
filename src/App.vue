<template>
  <HomeCompnent>
    <ul>
      <li v-for="(userName, index) in userNames" :key="index">
        {{ userName }}
      </li>
    </ul>

    <div>
      <h1>daryy</h1>
    </div>
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
