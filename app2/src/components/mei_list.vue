<template>
    <div class="content mei_list">
  	<div class="top-nav">
  		<ul class="clearfix">
  			<li><span><i class="iconfont">&#xe61d;</i>全部分类</span></li>
  			<li><span><i class="iconfont">&#xe601;</i>点赞排序</span></li>
  			<li><span><i class="iconfont">&#xe616;</i>我DIY的</span></li>
  		</ul>
  	</div>
  	<div class="card-list">
  		<div class="con-list">
  	 		<ul class="clearfix">
  	 			<li class="first">
  	 				<div class="photo-card" style=" background:#f0f0f0;">
  	 					<a href="javascript:;" class="upload_btn">
  	 						<i class="iconfont">&#xe602;</i>
  	 						<p>上传图片/文字</p>
  	 					</a>
  	 				</div>
  	 			</li>
  	 			<li>
  	 				<div class="photo-card">
  	 					<a href="javascript:;" class="img" style="background-image: url(../assets/images/img5.jpg);"></a>
  	 					<p class="txt"><a href="#">霍比屯的日常</a></p>
  	 					<div class="info clearfix">
  	 						<span class="author"><img src="../assets/images/user_mini.png">sfjjkjh</span>
  	 						<span class="zan"><i class="iconfont">&#xe600;</i>298</span>
  	 						<span class="collect"><i class="iconfont">&#xe605;</i>258</span>
  	 					</div>
  	 				</div>
  	 			</li>
  	 			<li>
  	 				<div class="photo-card">
  	 					<a href="javascript:;" class="img" style="background-image: url(../assets/images/img6.jpg);"></a>
  	 					<p class="txt"><a href="#">霍比屯的日常</a></p>
  	 					<div class="info clearfix">
  	 						<span class="author"><img src="../assets/images/user_mini.png">sfjjkjh</span>
  	 						<span class="zan"><i class="iconfont">&#xe600;</i>298</span>
  	 						<span class="collect"><i class="iconfont">&#xe605;</i>25</span>
  	 					</div>
  	 				</div>
  	 			</li>
  	 			<li>
  	 				<div class="photo-card">
  	 					<a href="javascript:;" class="img" style="background-image: url(../assets/images/img6.jpg);"></a>
  	 					<p class="txt"><a href="#">霍比屯的日常</a></p>
  	 					<div class="info clearfix">
  	 						<span class="author"><img src="../assets/images/user_mini.png">sfjjkjh</span>
  	 						<span class="zan"><i class="iconfont">&#xe600;</i>298</span>
  	 						<span class="collect"><i class="iconfont">&#xe605;</i>12</span>
  	 					</div>
  	 				</div>
  	 			</li>
  	 		</ul>
  	 	</div>
  	</div>
  </div>
</template>

<style>
	.top-nav{ height: 45px; line-height: 45px; background: #fff;margin-bottom: 15px; }
	.top-nav li{ width: 33.3%; float: left; }
	.top-nav li span{ display: block; text-align: center; font-size: 0.9rem; border-left: 1px solid #f3f7f7;}
	.top-nav li:first-child{ border-left: none;}
	.top-nav li span i{ padding-right: 5px;}

	.column.card-list .con-list{ padding-top: 12px;}
	.card-list .con-list ul{ padding-right: 10px;}
	.card-list .con-list li{ width: 50%; float: left; margin-bottom: 15px;}
	.card-list .con-list li .photo-card{ margin-left: 10px;  background: #f3f7f7; height:64vw; border:5px solid #f3f7f7; }
	.card-list .photo-card .img{ width: 100%; height: 50vw; display: block}
	.card-list .photo-card img{ width: 100%; height: 50vw;}
	.card-list .txt{font-size: 0.8rem; padding-top:5px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.card-list .info{line-height: 1.5rem; padding:5px 0;}
	.card-list .info span{ display: block; float: left; font-size: 0.6rem;padding-right: 5px;}
	.card-list .info span i{ float: left;}
	.card-list .author img{ height: 1.5rem; width: 1.5rem; border-radius: 50%; float: left; margin:0 2px 0 0;}

    .mei_list .card-list .con-list .photo-card{ background: #fff;}
    .mei_list .card-list .con-list ul{ padding-right: 6px;}
    .mei_list .card-list .con-list li { margin-bottom: 10px;}
    .mei_list .card-list .con-list li .photo-card{ margin-left: 6px;border:5px solid #fff;}
    .mei_list .card-list .con-list li.first .upload_btn{display:block; text-align: center; padding: 68px 0 30px 0; background: #f0f0f0;}
    .mei_list .card-list .upload_btn i{ color: #cecece; font-size: 3rem;}
    .mei_list .card-list .upload_btn p{ color: #cecece; margin-top: 10px;}
</style>

