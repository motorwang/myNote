<template>
<div>
    404 not found
    <el-button type="text" @click="goHome()"> 返回主页</el-button>
</div> 
</template>
<script>
  export default {
    methods:{
       goHome(){
          this.$router.push('/home');
       }
    }
  } 
</script>
