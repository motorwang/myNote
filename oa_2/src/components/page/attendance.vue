<template>
<div>
  <div class="block">
    <el-date-picker v-model="times" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    <el-button type="primary" @click="search()">查询</el-button>
  </div>

  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    
    <el-table-column prop="name" label="到达时间" width="150"></el-table-column>
    
    <el-table-column prop="province" label="离开时间" width="150"></el-table-column>
    
    <el-table-column prop="city" label="描述" width="150"></el-table-column>
    
    <!-- <el-table-column prop="address" label="地址" width="300"></el-table-column> -->
    <!-- <el-table-column prop="zip" label="邮编" width="150"></el-table-column> -->
    
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">补签</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 模态框 -->
  <el-dialog title="补签" :visible.sync="dialogTableVisible" width="35%">
    <el-form :model="form"> 
     <el-form-item label="开始时间" :label-width="formLabelWidth">
        <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" :label-width="formLabelWidth">
        <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog(false)">取 消</el-button>
      <el-button type="primary" @click="closeDialog(true)">确 定</el-button>
    </div>
  </el-dialog>
</div>

</template>

<script> 
 export default {
   data() {
     var datas = [{
       date: '2017-10-03',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2017-10-02',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2017-10-04',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2017-10-01',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }];
     return {
       tableData: datas,
       times: '',
       tableData1: datas,
       dialogTableVisible: false,
       form: {
         startTime: '',
         endTime: '',
         index: '',
         RstartTime:'',
         RendTime: '' 
       },
       formLabelWidth: '120px'
     }
   },
   methods: {
      handleClick(index, row) { 
        var date = row.date; 
        var startTime = Date.parse(row.date) + 3600 * 1000 * 1;
        var endTime = Date.parse(row.date) + 3600 * 1000 * 10;
        this.form.startTime = new Date(startTime)
        this.form.endTime = new Date(endTime)
        this.form.RstartTime = new Date(startTime)
        this.form.RendTime = new Date(endTime)
      
        this.dialogTableVisible = true;
        this.form.row = row;
        this.form.index = index;
        //this.editForm = Object.assign({}, row);  
      },
      closeDialog(result) {
        if (result) {
          //todo 更改数据
          var temp = this.tableData[this.form.index];
          var date = new Date(this.form.endTime);
          var dd = date.getDate();
          if (dd < 10) dd = "0" + dd;
          console.log(dd);
          temp.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + dd;
          var count=0;
        if( this.form.endTime == this.form.RendTime ||this.form.startTime == this.form.RstartTime){
          count++;
          }else{
          console.log(false);
          }
          console.log(count);
        //this.tableData[this.form.index] = temp;
        //this.tableData1[this.form.index] = temp;
          this.dialogTableVisible = false;
        } else {
          this.dialogTableVisible = false;
        }
      },
      search() {
        console.log(this.times);
        var self = this;
        if (self.times != null && self.times.length == 2) {
          self.tableData = self.tableData1;
          self.tableData = self.tableData.filter(function (item) {
            var currentTime = Date.parse(item.date);
            var startTime = Date.parse(self.times[0]);
            var endTime = Date.parse(self.times[1]);
            return currentTime >= startTime && currentTime <= endTime;
          })
        } else {
          self.tableData = self.tableData1;
        }
        console.log(self.tableData);
      }
   }
 } 
 </script>

<style scoped>
  .block{
    margin:20px 0;
  }
</style>