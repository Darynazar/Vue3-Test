<template>

    <div class="">
      <h1>{{userInfo.name}}</h1>
      <h1>{{userInfo.lastname}}</h1>
    </div>

    <button @click="sendData">send data</button>
  </template>
  
  <script>
  
  
  export default {
    props:{
        userInfo: Object
    },
    data(){
        return{
            data:'DATA'
        }
    },
    methods: {
        sendData(){
            this.$emit('childData', this.data)
        }
    }
  }
  </script>
  
  <style scoped>
  div {
  color:red
}
  </style>
  