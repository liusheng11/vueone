<template>
     <div class="content">
		 <loading v-show="loading"></loading>
  	<div class="top-nav">
  		<ul class="clearfix">
  			<li><span><i class="iconfont">&#xe61d;</i>全部分类</span></li>
  			<li><span><i class="iconfont">&#xe601;</i>点赞排序</span></li>
  			<li><span><i class="iconfont">&#xe616;</i>我DIY的</span></li>
  		</ul>
  	</div>
  	<div class="column imgtxt-list">
  	 	<div class="con-list">
  	 		<ul class="clearfix">


				 <!-- <transition-group
				enter-active-class="animated zoomInDown"
				>
				<li
					v-for="item in list"
					:key="item.id"
				>
					<router-link
					href="javascript:;"
					:to="'/detail/'+item.id"
					>
					<h2>{{item.id}}.{{item.title}}</h2>
					<p>{{item.detail}}</p>
					</router-link>
					<img src="src/assets/img/xing.png" @click="addItem(item)">
				</li>
				</transition-group> -->

				 <transition-group
				enter-active-class="animated zoomInDown"
				>
					<li
						v-for="item in list"
						:key="item.id"
					>
						<div class="li-box clearfix">
							
							<router-link			
								:to="'/tiediy_detail/'+item.id"
								>
								<a href="javascript:;" class="img fl" ><img :src="item.src"></a>
								<div class="txt-box">
									<p class="txt"><a href="javascript:;">{{item.content}}</a></p>
									<div class="info clearfix">
										<span class="zan"><i class="iconfont">&#xe600;</i>{{item.zan | fillzero}}人点赞</span>
										<span class="collect"><i class="iconfont">&#xe605;</i>{{item.collect | fillzero}}人收藏</span>
										<span class="author"><img :src="item.author_src">{{item.author_name}}</span>
									</div>
								</div>
							</router-link>
						</div>
					</li>
				</transition-group>				 	 	
  	 		</ul>
  	 	    <div class="Edit">
  	 	    	<a href="javascript:;" class="edit-btn"><i class="iconfont">&#xe62e;</i>我要贴</a>
  	 	    </div>
  	 	</div>
  	</div>  
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		data () {
			return {
				list:[]
			}
		},
		computed:mapGetters([
    'loading'
  ]),
		created() {
			this.$store.dispatch('LOADING',true);
		},
		mounted () {
			this.$http({
				url:'http://localhost:3000/tiediy',
				method:'get'
			}).then(
				(res)=>{
					// console.log(res.data);
					this.list=res.data;//可以丢到状态仓库里面	
				this.$store.dispatch('LOADING',false);				
				}
			).catch(
				(res)=>{
					console.log(res)
				}
			)

		}
	}
</script>

<style>
    /*贴DIY 页样式===================================*/
    .top-nav{ height: 45px; line-height: 45px; background: #fff;margin-bottom: 15px; }
    .top-nav li{ width: 33.3%; float: left; }
    .top-nav li span{ display: block; text-align: center; font-size: 0.9rem; border-left: 1px solid #f3f7f7;}
    .top-nav li:first-child{ border-left: none;}
    .top-nav li span i{ padding-right: 5px;}
    .Edit{ padding: 15px 0 0;}
    .edit-btn{ display: block; height: 40px; width: 40%; line-height: 40px; text-align: center; margin: 0 auto; border-radius: 20px; background: #58e5d6; color: #fff; font-size: 0.9rem;}
    .edit-btn i{ padding-right: 8px; font-size: 20px;}

     /*图文列表样式*/
    .imgtxt-list{padding-bottom: 15px; }
    .imgtxt-list .con-list li { border-bottom: 1px #f3f7f7 solid;}
    .imgtxt-list .li-box { padding: 10px 15px; }
    .imgtxt-list .li-box .img{ width: 24vw; height: 17vw;}
    .imgtxt-list .li-box img{ width: 24vw; height: 17vw;}
    .imgtxt-list .li-box .txt-box{ margin-left: 24vw; padding-left: 15px; }
    .imgtxt-list .li-box .txt-box .txt{ height: 8vw; line-height: 8vw;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .imgtxt-list .info{ line-height: 1.8rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .imgtxt-list .info span{display: block; float: left;color: #8f8f8f;font-size: 0.65rem; padding-right: 5px;}
    .imgtxt-list .info span.author{ float: right; padding-right: 0;}
    .imgtxt-list .info span i{ float: left;}
    .imgtxt-list .author img{ height: 1.8rem; width: 1.8rem; border-radius: 50%; float: left;margin:0px 5px 0 0;}

    /* end 贴DIY 页样式===================================*/
</style>

