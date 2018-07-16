<template>
    <div class="content">
  	 <div class="login-box">
  	 	 <div class="form-box">
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe608;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="text" placeholder="输入姓名" v-model="username">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe692;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="password" placeholder="输入密码" v-model="password">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="h20"></div>
  	 	 	<div class="row row-btn">
  	 	 		<a href="javascript:;" class="green-btn" @click="login">登录</a>
  	 	 	</div>
  	 	 	<div class="row row-btn">
					<router-link to="/user_register">
  	 	 				<a href="javascript:;" class="boder-btn">加入会员</a>
					</router-link>
  	 	 	</div>
  	 	 	<div class="row row-txt">
  	 	 		<a href="javascript:;" class="forget">忘记密码</a>
  	 	 	</div>
  	 	 </div>
  	 	 <div class="h20"></div>
  	 	 <div class="otherway">
  	 	 	 <div class="title"><span>其他登录方式</span></div>
  	 	 	 <ul class="clearfix">
  	 	 	 	<li>
  	 	 	 		<a href="#" class="weibo"><i class="iconfont">&#xe60a;</i></a>
  	 	 	 	</li>
  	 	 	 	<li>
  	 	 	 		<a href="#" class="qq"><i class="iconfont">&#xe607;</i></a>
  	 	 	 	</li>
  	 	 	 	<li>
  	 	 	 		<a href="#" class="weixin"><i class="iconfont">&#xe606;</i></a>
  	 	 	 	</li>
  	 	 	 </ul>
  	 	 </div>
  	 </div>
  </div>
</template>

<script>
	export default{
		data () {
			return {
				username:'',
				password:''
			}
		},		
		methods:{			
			login(){				
				this.$http({
					method:'post',
					url:'http://localhost:3000/login',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(
					(res)=>{
						// console.log(res)
						switch (res.data) {
							case 1:
			
 			//路由跳转           
            //存到状态管理，或者直接跳转到user,或者传数据给user
            // this.$router.push({path:'/user',params:{},query:{}})
								this.$store.dispatch('MYTO',false)
								this.$store.dispatch('INFO',this.username);
								this.$router.push({path:'/my_to'});
								break;
							case 0:
								alert('用户名或者密码错误')
								break;						
							default:
								alert('服务器离家出走啦');
								break;
						}
					}
				)
			}
		}
	}
</script>

<style>
    /*个人中心*************/
    .h20{ height: 20px;}
    /*登录页*/
    .login-box{ padding: 0 15px; }
    .login-box .form-box{ margin: 3rem 0 0;}
    .form-box .row-input{ height: 40px; width: 100%; line-height: 40px; border-radius: 5px; margin-bottom: 15px; background: #fff;}
    .form-box .row-l{ width: 40px; text-align: center;}
    .form-box .row-l .iconfont{ font-size: 1.2rem; color: #cecece;}
    .form-box .row-r{ margin-left: 40px;}
    .form-box .input_box{ width: 100%; height: 40px; border: none; outline: none;}
    .form-box .row-btn{height: 40px; width: 100%; line-height: 40px; border-radius: 5px; margin-bottom: 10px;text-align: center; }
    .form-box .row-btn a{ display: block;border-radius: 5px; }
    .form-box .row-btn a.boder-btn{ border: 1px solid #40C8B9; color: #40C8B9;}
    .form-box .row-txt{ height: 1.6rem; line-height: 1.6rem; }
    .form-box .row-txt a{ text-decoration:underline;}
    .form-box .row-txt .forget{float:right; color: #40C8B9; font-size: 0.8rem;}

    .otherway .title{ height: 0.8rem; text-align: center; border-bottom: 1px solid #cecece; margin-bottom: 2rem;}
    .otherway .title span{padding: 0 10px; background: #F3F7F7; font-size: 0.9rem; color: #cecece;}
    .otherway li{ width: 33.3%; float: left;}
    .otherway li a{ display: block; width: 3.2rem; height: 3.2rem; text-align: center; line-height: 3.2rem; border-radius: 50%; background: #fff; margin: 0 auto;}
    .otherway li a i{ font-size: 2rem;}
    .otherway li a.weibo i{ color: #e84c3d;}
    .otherway li a.qq i{ color: #3598db;}
	.otherway li a.weixin i{ color: #2dcc70;}
	
	.green-btn{ display: block; background: #40c8b9; text-align: center; color: #fff; cursor:pointer;}
	.green-btn:hover{ background: #5dd5c8;  color: #fff; transform:height ease 0.5s;}
</style>

