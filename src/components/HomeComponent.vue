<template>
  <div class="">
    <p>Name: {{ name }}</p>
    <ul>
      <li v-for="(userName, index) in userNames" :key="index">
        {{ userName }}
      </li>
    </ul>
  </div>
  <hr />

</template>
  
  <script>
  import {userNames} from '../mixins.js';
export default {
  props: {},
  mixins:[userNames],
  data() {
    return {
      name: "Name",
    };
  },
  methods: {},
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  