import Vue from 'vue';
import Api from '../api/api';

function apiFactory(url, params){
  return new Promise((resolve, reject)=>{
    Vue.http.post(url, params)
    .then(function(res){
      resolve(res.body)
    })
    .catch(function(res){
      reject(res.body)
    })
  })
}

export default{
  actions:{
    adminLogin: function({}, params){
      return apiFactory(Api.LOGIN_API, params)
    },
    getUserList: function({}, params){
      return apiFactory(Api.GETUSERLIST_API, params)
    },
    feedbackList: function({}, params){
      return apiFactory(Api.FEEDBACKLIST_API, params)
    },
    getReplyList: function({}, params){
      return apiFactory(Api.GETREPLYLIST_API, params)
    },
    replyUser: function({}, params){
      return apiFactory(Api.REPLYUSER_API, params)
    }
  }
}
