<template>

    <div class="">
      <h1>{{userInfo.name}}</h1>
      <h1>{{userInfo.lastname}}</h1>
    </div>
  </template>
  
  <script>
  
  
  export default {
    props:{
        userInfo: Object
    }
  }
  </script>
  
  <style scoped>
  div {
  color:red
}
  </style>
  