<template>
  <div class="">
    <h1>{{ name }}</h1>
  
  </div>
</template>
  
  <script>
import { inject } from 'vue';
export default {

  setup() {
  const name = inject('name');
    return {name};
  },

};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  