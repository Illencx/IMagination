<template>
  <topbar></topbar>
  <router-view/>
  <bott-bar></bott-bar>
</template>


<script>
import Topbar from './components/Topbar.vue'
import BottBar from './components/BottBar.vue'

export default {
  components: { Topbar, BottBar},


}
</script>


<style>
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
