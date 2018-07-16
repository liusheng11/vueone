<template>
    <div class="content u-index">
    <div class="userbox">
        <div class="userbox-1">
            <div class="userimg"><img src="../assets/images/user.png"></div>
            <div class="username">{{uname}}</div>
        </div>
        <div class="userbox-2">
            <ul class="clearfix">
                <li><a href="javascript:;" class="c000"><span>¥1688</span><br>钱包余额</a></li>
                <li><span>¥0.00</span><br>已提现余额</li>
            </ul>
        </div>
    </div>
    <div class="ul-list">
        <ul>
            <li class="tel">
                <i class="iconfont">&#xe68e;</i>1358958888
                <span class="fr">显示在微名片<input type="checkbox" class="switch" checked></span>
            </li>
            <router-link to="/user_info">
                <li>
                    <a href="javascript:;" class="arrow-right">
                    <i class="iconfont">&#xe660;</i>个人信息
                    </a>
                </li>          
            </router-link>
            <li>
                <a href="javascript:;" class="arrow-right">
                <i class="iconfont">&#xe625;</i>我的团队
                </a>
            </li>
            <li>
                <a href="javascript:;" class="arrow-right">
                <i class="iconfont">&#xe73a;</i>我的收藏
                </a>
            </li>
            <li>
                <a href="javascript:;" class="arrow-right">
                <i class="iconfont">&#xe604;</i>一键生成二维码
                </a>
            </li>
        </ul>       
        
        </div>
        
                <div class="ul-list">
            <ul>
                <router-link to="/user_login" tg="li">
                <li>
                    <router-link to="/home">
                         <a href="javascript:;" style="text-align:center; color:#999;" @click="INFO('用户名');MYTO(true)">退 出
                    </a>
                    </router-link>
                </li>              
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
	
	

    export default{
        data () {
            return {
                username:''
            }
        },
        computed:mapGetters([
    'uname'
  ]),
        mounted () {          
            // this.username=this.$route.query.username;      用于传参数      
        },      
         methods:mapActions([
      'INFO','MYTO'
    ])
        
}
</script>
   
<style>
    .u-index .userbox{
	background: -webkit-linear-gradient(#cfe4cd, #a3dcb6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#cfe4cd, #a3dcb6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#cfe4cd, #a3dcb6); /* Firefox 3.6 - 15 */
    background: linear-gradient(#cfe4cd, #a3dcb6); /* 标准的语法（必须放在最后） */ }
    .u-index .userbox .userbox-1{ padding: 5vw;}    
    .u-index .userbox .userimg{ margin: 0 auto; height: 20vw; width: 20vw; border-radius: 50%; border: 3px solid rgba(255,255,255,.3); overflow: hidden;}
    .u-index .userbox .userimg img{ width: 100%; height: auto;}
    .u-index .userbox .username{ line-height: 1.5rem; font-size: .9rem; text-align: center;}
    .u-index .userbox .userbox-2{ border-top: 1px solid rgba(255,255,255,.3); padding: 3vw;}
    .u-index .userbox .userbox-2 li{ width: 50%; float: left; text-align: center; color: #fff; font-size: 0.9rem;}
    .u-index .userbox .userbox-2 li span{ font-size: 1.2rem;}

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

