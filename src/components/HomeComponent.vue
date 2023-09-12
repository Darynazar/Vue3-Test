<template>
  <div class="">
    <h1>{{ name }}</h1>
   
  </div>
</template>
  
  <script>

export default {
 props:['name'],
 setup(props){

  console.log(props);
  return {}
 }
    
  
};
</script>
  
  <style scoped>
div {
  color: red;
}
</style>
  