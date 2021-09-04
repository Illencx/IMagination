<template>
  <div class="tbar">
    <router-link to="/">
    <img src="logo.png" alt="logo" class="logo">
    </router-link>

    <span>
      <router-link to='Login'>
      <el-button class="login" size="small" type="primary" >
        登录
      </el-button>
      </router-link>
    </span>

  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.tbar{
    width: 100%;
    height: 5vh;
    box-shadow: 0 0 3px gray;
}
.logo{
  margin-left: 10px;
  position: absolute;
  left: 5%;
  width: 180px;
}
.login{
  position: absolute;
  top: 1%;
  right: 5%;
}
</style>