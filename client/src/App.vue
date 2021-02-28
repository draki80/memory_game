<template>
<div>
    <Header />
    <div class="container">    
      <div class="row">
        <Container />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Container
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
