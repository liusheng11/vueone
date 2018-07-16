<template>
      <div class="content">
  	  <div class="ul-list">
  	  	 <ul>
  	  	 	<li class="pic">
  	  	 		<a>头像
  	  	 		   <span class="fr"><img src="../assets/images/user_mini.png"></span>
  	  	   	  	</a>
  	  	 	</li>
  	  	 </ul>
  	  </div>
  	  <div class="ul-list">
  	  	   <ul>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">昵称
                   <span class="fr">文娟</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">性别
                   <span class="fr">女</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">电话
                    <span class="fr">1235544556</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">邮箱
                   <span class="fr">1235544556</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   </ul>
  	  </div>
  	  <div class="ul-list">
  	  	   <ul>
  	  	   	  <li>
  	  	   	  	<a class="arrow-right">个性签名
  	  	   	  		<span class="fr">修改</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   </ul>
  	   </div>
  </div>
</template>

<style>
    .ul-list{ background: #fff; margin: 5vw 0;}
    .ul-list li{ border-bottom: 1px solid #f3f7f7; height: 45px; line-height: 45px;  clear:both;}
    .ul-list li.tel{ padding: 0 15px;}
    .ul-list li.tel span{ font-size: 0.9rem; color: #ccc;}
    .ul-list li a{ display: block; padding: 0 15px;}
    .ul-list li .iconfont{ font-size: 20px; padding-right: 5px;}
    .ul-list li:nth-child(1) .iconfont{ color: #34c5bc;}
    .ul-list li:nth-child(2) .iconfont{ color: #f54e91;}
    .ul-list li:nth-child(3) .iconfont{ color: #fcae14;}
    .ul-list li:nth-child(4) .iconfont{ color: #ff8040;}
    .ul-list li:nth-child(5) .iconfont{ color: #3cc24c;}

    .ul-list li.pic{height: 60px; line-height: 60px; }
    .ul-list li.pic img{ height: 46px; width: 46px; border-radius: 50%; margin-top: 7px;}
    .ul-list li span.fr{ font-size: 0.9rem; color: #ccc; padding-right: 15px;}
</style>

