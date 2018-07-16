<template>
    <header id="header">
  	<a href="javascript:;" class="iconfont fl" @click="goBack">&#xe63f;</a>
    <div class="title">{{hd_title}}</div>
    <a href="javascript:;" class="iconfont fr">&#xe6a0;</a>
  </header> 
</template>

<script>
  import {mapGetters} from 'vuex';
	export default{
		methods:{
			goBack(){
				this.$router.go(-1);
			}
    },
     computed:mapGetters([
    'hd_title'
  ]),
	}
</script>

<style>
    #header{ background: #353439;display: table; width: 100%; height: 45px; line-height: 45px; text-align: center; font-size: 18px; color: #fff; position: relative; }
    #header .title { height: 45px; line-height: 45px; text-align: center; position: absolute;right: 80px;left: 80px; width: auto; margin: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    #header a{ color: #fff; font-size: 24px; display: block;}  
    #header .fl{ padding: 0 10px;}
    #header .fr{ padding: 0 10px;}

    .c000{ color:#fff;}
</style>

