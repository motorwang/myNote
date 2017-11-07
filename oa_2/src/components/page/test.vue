<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option key="male" value="男" lable="male">
      </el-option>
      <el-option key="famale" value="女" lable="famale">
      </el-option>
      <el-option key="other" value="其他" lable="other">
      </el-option>
    </el-select>
     <span v-show="switchValue">on</span>
     <span v-show="!switchValue">off</span>
    
    
  </div>
</template> 

<script> 
    export default{
         data(){ 
             return{
                  value:'',
                  switchValue:''
                  
             }
         }
    }
</script>