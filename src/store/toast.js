export default{
  state:{
    toastText: '',
    showToast: false
  },
  actions:{
    showToast({commit}, msg){
      var that = this;

      commit('show', msg)

      setTimeout(function(){
        commit('hide')
      }, 1500)
    }
  },
  mutations:{
    hide:function(state){
      state.showToast = false;
    },
    show:function(state, msg){
      state.showToast = true;
      state.toastText = msg;
    }
  }
}
