<template>
  <div>
    <span>周报</span>
    <el-form :model="reportForm"  :rules="reportRules" ref="reportForm" label-width="100px" class="report-form">

<el-form-item label="日期" prop="date">
  <el-date-picker v-model="reportForm.date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
  </el-date-picker>
</el-form-item>

<el-form-item label="工作内容" prop="content">
  <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="content">
  </el-input>
</el-form-item>
<el-form-item label="完成内容" prop="content">
  <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="completeContent">
  </el-input>
</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('reportForm')">提交</el-button>
        <el-button @click="resetForm('reportForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
  data() { 
      return  {
        reportForm: {
          date: '',  
          content:'',
          completeContent:''
        },
        reportRules: {
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ] ,
          content:[{ required: true, message: '请填写工作内容', trigger: 'blur' }],
           completeContent:[{ required: true, message: '请填写完成内容', trigger: 'blur' }]
        }
      };
     
  }
  }

</script>
