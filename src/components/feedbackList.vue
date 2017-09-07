<template>
  <div>
    <router-link v-for="item in list" class="feedback-group" :to="{path:'/reply/'+item.openId}" :key="item.openId">
      <img :src="decodeURIComponent(item.avatar) == '../../images/user-default1.png' ? userDefault : decodeURIComponent(item.avatar)" class="head"/>
      <span class="registerTime">回复时间：{{item.replyTime}}</span>
      <span class="new-msg" v-if="item.replyState == 1 ? true : false">新回复</span>
    </router-link>
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

      this.feedbackList({
          token: localStorage.getItem('token')
        })
        .then(function(res){
          that.list = res.content;
        })

    },
    methods:{
      ...mapActions(['feedbackList'])
    }
  }
</script>

<style>
  .feedback-group{
    display: block;
    color: #333;
    padding: .2rem .4rem;
    border-bottom: 1px solid #8a8a8a;
  }
  .new-msg{
    color: red;
    font-size: .3rem;
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
