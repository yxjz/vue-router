<template>
  <div>
    我是about

    <hr>
    <!--<ul class="nav">
      <router-link to="/about/study" tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a >work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hoddy</a>
      </router-link>
    </ul>-->
    <ul class="nav">
      <router-link :to="{name:'study'}" tag="li" exact>
        <a>study</a>
      </router-link>
      <router-link :to="{name:'work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'hobby'}" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="ecmascript-6">

</script>

<style rel="stylesheet">

</style>
