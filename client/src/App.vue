<template>
  <div id="app" >
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
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina');
@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Arimo');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
.simpleCard {
    border-radius: 2px;
    background-color: #fff;
    padding: 5px;
    -webkit-box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
    box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
