<template>
  <el-card class="main">
    <div class="login_title">注册/Register</div>

    
    <div style="margin-top:170px">
    昵称:
    <el-input size="small" class="input_name" v-model="name"></el-input>
    性别:
      <el-radio v-model="sex" label="1">男</el-radio>
      <el-radio v-model="sex" label="2">女</el-radio>
    <div style="height:10px;width:10px"></div>
    账号:
    <el-input class="input" size="small" v-model="account"></el-input>
    </div>
    <div>
    密码:
    <el-input class="input" size="small" show-password v-model="password"></el-input>
    </div>
    <div style="position:absolute;bottom:20%;right:25%">
      <a href="/#/Login" style="color:#409EFF;text-decoration:none">已拥有账户:请登录 &nbsp;</a>
      <el-button type="primary" > 注册 </el-button>
    </div>
    
  </el-card>
</template>

<script>
export default {
data(){
  return {
    password:'',
    account:'',
    sex:''
  }
}
}
</script>

<style scoped>
.login_title{
  color: #409EFF;
  font-size: 250%;
  text-shadow: 0 3 5px gray;
  position: absolute;
  left:20;
} 

.main{
margin-top: 10%;
width: 50%;
height: 50vh;
position: absolute;
left: 25%;
}


.input{
  width: 50%;
  margin-bottom: 15px;
}

.input_name{
  width: 30%;
  margin-bottom: 15px;
}

.sub{
  color: gray;
  font-size: 20PX;
}
</style>