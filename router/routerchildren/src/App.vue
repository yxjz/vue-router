<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link tag="li" :to="index" exact>
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link to="/document">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return{
        index: '/home'
      }
  }
}
</script>

<style>

</style>
