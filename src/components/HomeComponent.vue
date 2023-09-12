<template>
  <div class="">
    <h1>{{ fullname }}</h1>
    <button @click="updateName">updateName</button>
  </div>
</template>
  
  <script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  setup() {
    const name = ref("ali");
    const last = ref("dary");
    const fullname = computed(() => {
      // console.log(name.value)
      // console.log(last.value)
      return name.value + " " + last.value;
    });

    watch(name, (newValue, oldValue) => {
      console.log(name.value, newValue, oldValue);
      console.log(last.value);
    });

    watchEffect(()=>{
      console.log(name.value)
      console.log(last.value)
    })

    function updateName() {
      name.value = "heydar";
    }
    return { name, last, fullname, updateName };
  },
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  