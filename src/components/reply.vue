<template>
  <div :style="{height: clientHeight + 'px'}" class="wrap">
    <div class="list-wrap">
      <div class="line" v-for="item in list" :key="item.feedbackId">
        <div :class="[item.replyType == 1 ? 'left' : 'right']" class="clearfix">
          <div :class="[item.replyType == 1 ? 'pull-left' : 'pull-right']">
            <img :src="item.avatar ? decodeURIComponent(item.avatar) : adminDefault" class="reply-head" style="display: block;">
          </div>
            <span class="msg" :class="[item.replyType == 1 ? 'pull-left' : 'pull-right']">
              <span v-text="item.msg"></span>
            </span>
          </div>
      </div>
    </div>
    <footer class="reply-input-wrap">
      <input type="text" class="reply-input" v-model="msg">
      <div class="submit-btn" id="submit-btn" @click="commitReply">回复</div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex';
  import adminDefault from '../../static/img/admin-default.jpg';

  export default{
    data: function(){
      return {
        clientHeight: 0,
        list: [],
        msg: '',
        adminDefault:adminDefault
      }
    },
    created: function(){
      var that = this;
      this.clientHeight = document.documentElement.clientHeight;

      this.getReplyList({
        openId: this.$route.params.openId
      })
      .then(function(res){
        if(res.errorCode == 0){
          that.list = res.content;
        }
      })
    },
    methods:{
      commitReply: function(){
        var that = this;

        if(this.msg != ''){
          this.replyUser({
            openId: this.$route.params.openId,
            msg: this.msg,
            token: localStorage.getItem('token')
          })
          .then(function(res){
            if(res.errorCode == 0){
              that.list = res.content;
              that.msg = '';
            }
          })
        }
      },
      ...mapActions(['getReplyList', 'replyUser'])
    }
  }
</script>

<style>
  body{
    height:100%;
  }
  #app{
    height:100%;
  }
  .wrap{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 0.375rem;
    background-color: #f1f4f9;
  }
  .list-wrap{
    padding: 0 .4rem;
    -webkit-box-flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .text-center{
    text-align: center;
  }
  .pull-left{
    float: left;
  }
  .pull-right{
    float: right;
  }
  .clearfix::after{
    content: "";
    display: table;
    clear: both;
  }
  .container-fluid{
    padding:0 0.375rem;
  }
  .main-head{
    height:1.4rem;
    line-height: 1.4rem;
    background-color: #6198FC;
    color:#fff;
  }
  .gray{
    color:#afafaf!important;
  }

  .feedback-msg{
    padding: 0.4rem 0.375rem;
    border: 1px solid #E5E5E5;
    background-color: #fff;
  }

  .line span, .line i, .line time, .line img{
    vertical-align: middle;
  }

  .sort{
    color:#6198fc;
  }

  .modo{
    margin-right: 0.1288rem;
    width: 0.40257rem;
    opacity: .3;
  }

  .feedback-msg .fa{margin-right:0.2rem;color:#ABAAAA;font-size: 0.40625rem;}
  .feedback-msg .fa-mobile{font-size:0.6rem;}

  .line:not(:last-of-type){
    margin-bottom: 0.4rem;
  }

  .discription{
    padding: 0.28125rem 0;
    border-radius: 0.0625rem;
    color:#9b9b9b;
    text-align: justify;
    font-weight: bold;
    word-break: break-all;
    line-height: 1.5;
  }

  .no-discription{
    color: #BEBDBE;
  }

  .msg-num{
    color:#bebdbe;
  }

  .unread{
    color:#ffa907;
  }

  .border{
    border-bottom: 1px solid #e6e5e5;
  }

  .msg{
    margin-top: 0.1rem;
    position: relative;
    padding: 0.25rem;
    display: inline-block;
    vertical-align: top;
    word-break: break-all;
    max-width: 6.4rem;
    border-radius: 0.15625rem;
  }

  .name{
    font-size: 0.34rem;
    line-height: 0.6rem;
  }

  .left .msg{
    margin-left: 0.375rem;
  }

  .time{
    display: block;
    min-width: 3.125rem;
    text-align: right;
  }

  .time{
    padding-top:0.25rem;
    color: #b1b1b1;
  }


  .msg{
    background-color: #fff;
    margin-right: 0.375rem;
  }

  .left .msg{
    color:#0f62fb;
  }

  .left .msg::after{
    content: "";
    position:absolute;
    top:0.3125rem;
    left:-0.25rem;
    border-top: 0.3125rem solid #fff;
    border-right: 0.3125rem solid transparent;
    border-left: 0.3125rem solid transparent;
  }

  .right .msg::after{
    content: "";
    position:absolute;
    top:0.3125rem;
    right:-0.25rem;
    border-top: 0.3125rem solid #fff;
    border-right: 0.3125rem solid transparent;
    border-left: 0.3125rem solid transparent;
  }

  .right .reply-head{
    float: right;
  }

  .reply-head{
    width:1rem;
    height:1rem;
    border-radius: 50%;
    vertical-align: middle;
  }



  .msg img{
    max-width: 7.1875rem;
    height:auto;
  }

  .line{
    margin: 0.46875rem 0;
  }

  .reply-input-wrap{
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 0 0.3rem;
    height:1.2rem;
    border-top:1px solid #d7d7d7;
    background-color: #f4f4f6;
  }

  .reply-input{
    padding-top: 0.05333rem;
    padding-bottom: 0.05333rem;
    padding-left: 0.26666rem;
    width:7.4rem;
    height:0.8rem;
    border: 1px solid #d7d7d7;
    border-radius:0.0644rem;
    background-color: #fcfcfc;
  }

  .submit-btn{
    margin-left: 0.2rem;
    padding: 0.2rem 0.38rem;
    vertical-align: middle;
    border:0;
    border-radius:0.0644rem;
    background-color:#6198FC;
    color:#fff;
  }

  .img-item:first-child{
    margin-left: 0;
  }
  .img-item{
    margin-left: 0.4933rem;
    display: inline-block;
    width: 1.8666rem;
    height: 1.8666rem;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 0.1066rem;
  }
  .img-show{
    display: none;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000!important;
  }
</style>
