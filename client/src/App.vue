<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  sockets: {
    connected(){
      var Timer = now.Date();
      this.$sockets.emit('postTime', Timer) // Gửi lên server check time cho tài khoản!
    },
    disconnected(){

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
