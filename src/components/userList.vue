<template>
  <div>
    <div v-for="item in list" class="user-group">
      <img :src="decodeURIComponent(item.avatar) == '../../images/user-default1.png' ? userDefault : decodeURIComponent(item.avatar)" class="head"/>
      <span class="registerTime">注册时间：{{item.registerTime}}</span>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState} from 'vuex';
  import userDefault from '../../static/img/user-default1.png';

  export default{
    data:function(){
      return {
        list:[],
        userDefault:userDefault
      }
    },
    created: function(){
      var that = this;

      this.getUserList({
        token: localStorage.getItem('token')
      })
      .then(function(res){
        that.list = res.content;
      })

    },
    methods:{
      ...mapActions(['getUserList'])
    }
  }
</script>

<style>
  .user-group{
    padding: .2rem .4rem;
    border-bottom: 1px solid #8a8a8a;
  }
  .head{
    margin-right: .4rem;
    width: 2rem;
    height:2rem;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
  }
  .head, .registerTime{
    vertical-align: middle;
  }
</style>
