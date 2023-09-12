<template>
  <div class="">
    <h1>{{ obj }}</h1>
    <button @click="updateName">update</button>
  </div>
</template>
  
  <script>
import { ref,reactive } from "vue";
export default {
  setup() {
    let name = ref("daryyr");
    let obj = reactive({
      a:"A",
      b:"B"
    });
    function updateName() {
      console.log(obj);
      obj.a = "C"

      // name.value = "ali heydari";
    }
    return { obj, name, updateName };
  },
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  