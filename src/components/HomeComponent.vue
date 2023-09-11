<template>
  <div class="">
    <slot name="ul"></slot>
  </div>
  <hr>
  <slot name="div"></slot>

  <button @click="sendData">send data</button>
  <slot></slot>
</template>
  
  <script>
export default {
  props: {
    
  },
  data() {
    return {
    
    };
  },
  methods: {
   
  },

};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  