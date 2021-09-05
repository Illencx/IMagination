<template>

    <div class="slogan">
      一个全新的即时通讯程式
    </div>

    <img src="ads.png" alt="ads" class="img">

    <iframe
    class="bg"
     src="/bg.html" 
     width="100%"
     frameborder="0">
     </iframe>

</template>

<script>


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

.slogan{
  font-size: 250%;
  position: absolute;
  top: 25%;
  left: 20%;

}
.bg {
  height: 80vh;
  z-index: -2;
}
.img{
 position: absolute;
 bottom: 0;
 left: 38%;
}
</style>