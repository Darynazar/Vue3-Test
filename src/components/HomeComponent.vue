<template>
  <div class="">
    <h1>{{ name }}</h1>
    <button @click="update">update</button>
  </div>
</template>
  
  <script>
export default {
  props: ["name"],
  setup(props, { emit }) {
    function update(){
    emit("updateName", "ali heydar");
      
    }
    return {update};
  },
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  