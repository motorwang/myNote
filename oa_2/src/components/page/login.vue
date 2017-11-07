<template>

  <div class="main">
            <div class="login-wrap">
                    <div class="login-title">中科融信信息化系统</div>
                   <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="login-form">

                        <el-form-item label="用户名" prop="username">
                          <el-input v-model="loginForm.username"  placeholder="考勤号或者登陆账号"></el-input>
                        </el-form-item>

                        <el-form-item label="密码" prop="password">
                          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                        </el-form-item>
                      </el-form>
                </div>
    </div>
</template>

<script>
   export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }
        else{
            callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          password: '1111',
          username: '1222'
        },
        loginRules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],

          username: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var self=this;
        self.$refs[formName].validate((valid) => {
          if (valid) {

              
           self.$axios.post('/user', { 
             username: self.loginForm.username, 
             password: self.loginForm.password})
             .then(function (response) {
               console.log(response);
               })
               .catch(function (error) {
               localStorage.setItem('ms_username',self.loginForm.username);
               self.$router.push('/home');
             });
          //
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scope>
.main {
  height: 100%;
  background: url("../../assets/qnlog.png");
}

.login-wrap {
  width: 400px;
  position: absolute;
  top: 30%;
  left:60%;
  text-align: center;
  background-color: #F0F0F0;
  border-radius: 5px;
}

.login-title {
  padding: 20px 0 20px 0;
  background-color: #409EFF;
  margin-bottom: 10px;
  font-size: 22px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #5a5e66;
}

.login-form {
  margin-right: 50px;
}

</style>
