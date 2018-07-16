<template>
  <div id="app">
   <hdbar></hdbar>
   <router-view></router-view>
   <footbar></footbar>
  </div>
</template>

<script>

import hdbar from './components/hdbar';
import footbar from './components/footbar';

import * as types from './store/type.js'

export default {
  name: 'App',
  components: {
    hdbar,footbar
  },
 
  watch: {
    $route(to){
      let path = to.path;
      this.routeCheck(path);
    }
  },
  // mounted(){
  //   this.routeCheck(this.$route.path)
  // },
   
  methods:{
    routeCheck(path){
      if (/home/.test(path)){
        this.$store.dispatch(types.VIEW_HD,'首页');
      }
      if (/tiediy/.test(path)){
        this.$store.dispatch(types.VIEW_HD,'贴DIY');
      }
      if (/meidiy/.test(path)){
        this.$store.dispatch(types.VIEW_HD,'美DIY');
      }
      if (/user_login/.test(path)){
        this.$store.dispatch(types.VIEW_HD,'登录');
      }
      if (/user_index/.test(path)){
        this.$store.dispatch(types.VIEW_HD,'我的');
      }
    }

  }
}
</script>

<style>

</style>
