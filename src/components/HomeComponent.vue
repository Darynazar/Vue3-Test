<template>
  <div class="">
    <h1>{{ name }}</h1>
    <button @click="updateName">update</button>
  </div>
</template>
  
  <script>
import { ref } from "vue";
export default {
  setup() {
    let name = ref("daryyr");
    function updateName() {
      name.value = "ali heydari";
    }
    return { name, updateName };
  },
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  