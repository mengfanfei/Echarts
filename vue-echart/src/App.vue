<template>
  <div id="app">
    <echarts></echarts>
  </div>
</template>

<script>
import echarts from './components/echarts'

export default {
  name: 'App',
  components: {
    echarts
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>
