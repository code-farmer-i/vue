<template>
  <div>
    <img src="../../static/img/logo.jpg" class="logo"/>
    <div class="title">简易记账簿后台管理</div>
    <div class="inp-wrap">
      <input type="text" class="inp" placeholder="账号" v-model="userName">
    </div>
    <div class="inp-wrap">
      <input type="password" class="inp" placeholder="密码" v-model="password">
    </div>
    <div class="btn" @click="adminLogin">登录</div>
    <toast :toastText="toastText"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState, mapMutations} from 'vuex';
  import toast from './common/toast.vue';
export default {
  name: 'hello',
  data () {
    return {
      userName: '',
      password: '',
      toastText: ''
    }
  },
  methods:{
    adminLogin: function(){
      var that = this;

      that.$store.dispatch('adminLogin', {
          userName: that.userName,
          password: that.password
      })
      .then(function(res){
        if(res.errorCode == 0){
          localStorage.setItem('token', res.token);
          that.$router.push('/main');
        }else{
          that.$store.dispatch('showToast', '账号或密码错误')
        }
      })
    }
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  components:{
    toast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    margin: 1rem auto 0;
    display: block;
    width: 4rem;
    height:4rem;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
  }
  .title{
    margin-top: .4rem;
    font-size: 0.6rem;
    text-align: center;
    font-weight: bold;
  }
  .inp-wrap{
    margin-top: .7rem;
    text-align: center;
  }
  .inp{
    padding: 0 .2rem;
    width: 6rem;
    height: 1rem;
    border: 1px solid #8a8a8a;
    -webkit-border-radius:.1rem;
    -moz-border-radius:.1rem;
    border-radius:.1rem;
    -webkit-appearance: none;
  }
  .btn{
    margin: .4rem auto 0;
    width: 6rem;
    height:1rem;
    line-height: 1rem;
    text-align: center;
    color:#fff;
    -webkit-border-radius:.1rem;
    -moz-border-radius:.1rem;
    border-radius:.1rem;
    background-color: #6198fc;
  }
</style>
