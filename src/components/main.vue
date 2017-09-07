<template>
  <div>
    <router-link class="group" :to="{path:'/userList'}">用户列表</router-link>
    <router-link class="group" :to="{path:'/feedbackList'}">反馈列表</router-link>
  </div>
</template>

<style>
  .group{
    display: block;
    padding: .4rem;
    color:#333;
    border-bottom: 1px solid #8a8a8a;
    text-decoration: none;
  }
  .group:link, .group:visited, .group:hover, .group:active{
    text-decoration: none;
  }
</style>
