<template>
  <el-card class="main">
    <div class="login_title">登录/login</div>


    <div style="margin-top:170px">
    账号:
    <el-input class="input" size="small" v-model="account"></el-input>
    </div>
    
    <div>
    密码:
    <el-input class="input" size="small" show-password v-model="password"></el-input>
    </div>

    
    <div style="position:absolute;bottom:20%;right:25%">
      <a href="/#/reg" style="color:#409EFF;text-decoration:none">创建账户 &nbsp;</a>
      <el-button type="primary" @click="confirmLogin"> 登录 </el-button>
    </div>
    
  </el-card>
</template>

<script>
export default {
data(){
  return {
    password:'',
    account:''
  }
},
methods :{



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
.sub{
  color: gray;
  font-size: 20PX;
}
</style>