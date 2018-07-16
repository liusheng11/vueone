<template>
	<transition
	enter-active-class="animated zoomInLeft"
	>		
    <div class="content con-detail">	
  	<div class="top-nav">
  		<ul class="clearfix">
  			<li><span><i class="iconfont">&#xe61d;</i>全部分类</span></li>
  			<li><span><i class="iconfont">&#xe601;</i>点赞排序</span></li>
  			<li><span><i class="iconfont">&#xe616;</i>我DIY的</span></li>
  		</ul>
  	</div>
  	<div class="detail_box">
  		<div class="con">
        	<p class="title">{{article.content}}</p>
  			<p class="pic"><img src="article.src"></p>
  		</div>
  		<div class="info clearfix">
			<span class="author"><img :src="article.author_src">{{article.author_name}}</span>
			<span class="zan"><i class="iconfont">&#xe600;</i>{{article.zan | fillzero}}人点赞</span>
			<span class="collect"><i class="iconfont">&#xe605;</i>{{article.collect | fillzero}}收藏</span>
		</div>
  	</div> 
  	<div class="user_card clearfix">
  		<i class="icon icon-left"></i>
  		<i class="icon icon-right"></i>
  	 	<div class="item pic">
  	 		<div class="userimg"><img :src="article.author_src"></div>
  	 		<div class="username">{{article.author_name}}</div>
  	 	</div>
  	 	<div class="item info">
  	 		<div class="tel">电话：1384568899</div>
  	 		<div class="signature">个性签名：</div>
  	 		<p class="signature_txt">生活不仅有面包，还有诗和远方</p>
  	 	</div>
  	 	<div class="item code">
  	 		<div class="codeimg"><img src="../assets/images/code.png"></div>
  	 	</div>
  	 </div>
  </div>
  </transition>
</template>

<script>
	export default{
		data () {
			return {
				article:{}
			}
		},		
		mounted () {
			this.$http({
				method:'get',
				url:'http://localhost:3000/tiediy_detail',
				params:{
					id:this.$route.params.id
				}
			}).then((res)=>{
				this.article=res.data[0];				
			}).catch((res)=>{
				console.log(res);
			})
		}

	}
</script>


<style>
	.top-nav{ height: 45px; line-height: 45px; background: #fff;margin-bottom: 15px; }
	.top-nav li{ width: 33.3%; float: left; }
	.top-nav li span{ display: block; text-align: center; font-size: 0.9rem; border-left: 1px solid #f3f7f7;}
	.top-nav li:first-child{ border-left: none;}
	.top-nav li span i{ padding-right: 5px;}
    .detail_box{ margin: 0 15px 10px; background: #fff; padding: 10px;}
    .detail_box .title{ line-height: 1.8rem; margin-bottom: 6px; font-size: 0.9rem;}
    .detail_box p img{ width: 100%; height: auto;}
    .detail_box .info{ padding: 10px 0; height: 40px; line-height: 40px;}
    .detail_box .info span{ padding-right: 10px; font-size: 0.8rem;}
    .detail_box .info .author img{ float: left; height: 40px; width: 40px; border-radius: 50%; margin-right: 5px;}
    .con-detail .user_card{ position: relative; margin: 0 15px 15px; padding: 15px 0;}
    .con-detail .user_card .icon{ display: block; height: 32px; width: 8px; border-radius: 4px; background: #d9f5f2;}
    .con-detail .user_card .icon-left{ position: absolute; left: 15px; top: -21px;}
	.con-detail .user_card .icon-right{ position: absolute; right: 15px; top: -21px;}
	/*名片样式*/
	.user_card{ background: #fff; margin-bottom: 15px; padding: 20px 0; }
	.user_card .item{ float: left; width: 25%; padding: 0 2%; }
	.user_card .item.pic{border-right: 1px solid #f3f7f7;}
	.user_card .item.code{border-left: 1px solid #f3f7f7;}
	.user_card .item.info{ width: 36%;}
	.user_card .userimg{ width: 20vw; height: 20vw; margin: 0 auto; border-radius: 50%;border: 5px solid #f0f0f0; overflow: hidden;}
	.user_card .userimg img,.user_card .codeimg img{ width: 100%; height: auto;}
	.user_card .username {font-size:0.75rem; padding-top:5px;text-align:center; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.user_card .codeimg{width: 22vw; height: 22vw; margin: 6px auto; border-radius: 5px;border: 5px solid #f0f0f0; overflow: hidden; }
	.user_card .info div{font-size:0.8rem; line-height:1.6rem;}
	.user_card .info p{ font-size:0.8rem; line-height:1.6rem; max-height: 3.2rem; overflow: hidden;}
</style>

