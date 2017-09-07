<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState({
        record: state => state.needUpdate.record
      })
    }
  }
</script>

<style>
  *{
    box-sizing: border-box;
  }
  #app {
    margin: 0 auto;
    max-width: 10rem;
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    color: #333;
    font-size: .4rem;
  }
  a, a:link, a:visited, a:hover, a:active{
    text-decoration: none;
  }
</style>
