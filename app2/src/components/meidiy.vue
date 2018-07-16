<template>
<transition
	enter-active-class="animated zoomInUp"
	>
    <div class="content meidiy">
  	   <ul>
			<router-link to="/mei_list">
				<li>
					<a href="javascript:;">
						<div class="item item-1 clearfix">
							<div class="pic fl"><i class="iconfont">&#xe62e;</i></div>
							<div class="txt-box">
								<h2>美拍</h2>
								<p>自拍/摄影/风景/视角</p>
							</div>
						</div>
					</a>
				</li>			 
			</router-link>
  	   	   <li>
  	   	   	   <div class="item item-2 clearfix">
  	   	   	   	   <div class="pic fl"><i class="iconfont">&#xe69a;</i></div>
  	   	   	   	   <div class="txt-box">
  	   	   	   	   	  <h2>美言</h2>
  	   	   	   	   	  <p>对白/思想/歌词/心情</p>
  	   	   	   	   </div>
  	   	   	   </div>
  	   	   </li>
  	   	   <li>
  	   	   	   <div class="item item-3 clearfix">
  	   	   	   	   <div class="pic fl"><i class="iconfont">&#xe653;</i></div>
  	   	   	   	   <div class="txt-box">
  	   	   	   	   	  <h2>美视</h2>
  	   	   	   	   	  <p>搞笑/流行/价值/片段</p>
  	   	   	   	   </div>
  	   	   	   </div>
  	   	   </li>
  	   </ul>
  </div>
  </transition>
</template>

<style>
    /*美DIY 样式=======================*/
    .meidiy{ padding: 20px 0;}
    .meidiy li{ margin-bottom: 15px; background: #fff; border-top: 1px solid #f0f0f0;border-bottom: 1px solid #f0f0f0;}
    .meidiy li .item{ padding: 15px 20px;}
    .meidiy .item .pic{ width: 60px; height: 60px; line-height: 60px; text-align: center; border-radius: 50%; background: #fa669a;}
    .meidiy .item .pic i{ font-size: 30px; color: #fff;}
    .meidiy .item.item-2 .pic{ background: #ffb053;}
    .meidiy .item.item-3 .pic{ background: #6cdc55;}
    .meidiy .txt-box{ margin-left: 80px;}
    .meidiy .item h2{ line-height: 2.2rem;}
    .meidiy .item-1 h2{ color: #fa669a;}
    .meidiy .item-2 h2{ color: #ffb053;}
    .meidiy .item-3 h2{ color: #6cdc55;}
    .meidiy .item .txt-box p{font-size: 0.8rem;line-height: 1.6rem; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>

