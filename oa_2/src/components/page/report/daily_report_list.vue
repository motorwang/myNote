<template>
  <div >  
    <el-card class="box-card" v-for="o in 4" :key="o">
      <div slot="header" class="clearfix">
        <span>日报{{o}}</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
          <div class="bottom clearfix">
          <time class="time">2017-11-16 18:00</time>
          <el-button type="text" class="button">详情</el-button>
        </div>
    </el-card>
  </div>
</template>
<script>
  export default {
  
  } 
</script>
<style>
  .text {
    font-size: 14px;
  } 
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 310px;
    display: inline-block;
    margin: 10px;
  }
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

</style>