<template>
  <div class="toast" v-show="showToast">{{toastText}}</div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';

  export default{
    computed: {
      ...mapState({
        'toastText': state => state.toast.toastText,
        'showToast': state => state.toast.showToast,
      })
    }
  }
</script>

<style>
.toast{
  padding: .3rem;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.6);
  color:#fff;
  border-radius: .1rem;
}
</style>
