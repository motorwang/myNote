<template>
    <div class="sidebar"> 
        <el-menu :default-active="onRoutes"  unique-opened router>

            <el-menu-item index="attendance">
               <i class="el-icon-setting"></i>签到
            </el-menu-item>

            <el-submenu index="1" > 
               <template slot="title"><i class="el-icon-menu"></i>日志</template>
               <el-menu-item index="daily">日报</el-menu-item>
               <el-menu-item index="dailylist">日报列表</el-menu-item>
               <el-menu-item index="week">周报</el-menu-item>
               <el-menu-item index="monthly">月报</el-menu-item> 
           </el-submenu>

            <el-submenu index="2" > 
               <template slot="title"><i class="el-icon-date"></i>我的申请</template>
               <el-menu-item index="error">测试1</el-menu-item>
               <el-menu-item index="22">测试2</el-menu-item>
               <el-menu-item index="23">测试3</el-menu-item>
               <el-menu-item index="24">测试4</el-menu-item>
           </el-submenu>

            <el-menu-item index="leave">
               <i class="el-icon-star-on"></i>请假
            </el-menu-item>

             <el-menu-item index="test">
               <i class="el-icon-upload3"></i>其他
            </el-menu-item> 
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                  
            }
        },
        computed:{
            onRoutes(){
                // console.log(this.$route.path);
                // return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
