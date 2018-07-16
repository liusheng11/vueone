<template>
    <div class="content">
  	 <div class="register-box">
  	 	 <div class="form-box">
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe64f;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="text" v-model="username" placeholder="输入手机号/邮箱/昵称">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe692;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="password" v-model="password" placeholder="输入密码">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe692;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="password" v-model="password" placeholder="再次输入密码">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe608;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" type="text" v-model="nickname" placeholder="输入昵称">
  	 	 		</div>
  	 	 	</div><div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe6a8;</i></div>
  	 	 		<div class="row-r">
  	 	 			<span>性别</span>
  	 	 			<label><input class="btn-radio" type="radio" name="radio1" checked>男</label>
                    <label><input class="btn-radio" type="radio" name="radio1">女</label>
  	 	 		</div>
  	 	 	</div><div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe60f;</i></div>
  	 	 		<div class="row-r">
  	 	 			<span>支付方式</span>
  	 	 			<label style="color: #24a82e;"><input class="btn-radio" type="radio" name="radio2" checked>微信</label>
                    <label style="color: #2d95de;"><input class="btn-radio" type="radio" name="radio2">银行卡</label>
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-txt">
  	 	 		<p><input class="checkbox" type="checkbox" name="checkbox">已阅读并同意<a href="user_xieyi.html">《微风向用户协议》</a></p>
  	 	 	</div>
  	 	 	<div class="row row-btn">
  	 	 		<a href="javascript:;" class="green-btn" @click="reg">确定</a>
  	 	 	</div>
  	 	 </div>
  	 </div>
     <div class="register-table">
     	<table>
     		<tr><th>非会员/会员权限对比</th><th>非会员</th><th>会员</th></tr>
     		<tr>
     			<td class="td-1">无限使用<span>贴贴</span>功能</td>
     			<td class="td-2">仅限浏览</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">无限使用<span>美拍</span>功能</td>
     			<td class="td-2">仅限浏览</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">无限使用<span>美言</span>功能</td>
     			<td class="td-2">仅限浏览</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">无限使用<span>美视</span>功能</td>
     			<td class="td-2">仅限浏览购买</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">无限使用<span>美视</span>功能</td>
     			<td class="td-2">仅限浏览购买</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">一键生成<span>推广</span>二维码</td>
     			<td class="td-2">×</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">分销系统帮你<span>赚钱</span></td>
     			<td class="td-2">×</td>
     			<td class="td-3">无限使用</td>
     		</tr>
     		<tr>
     			<td class="td-1">社区<span>促销奖励</span>活动</td>
     			<td class="td-2">×</td>
     			<td class="td-3">√</td>
     		</tr>
     		<tr>
     			<td class="td-1"><span>会费</span></td>
     			<td class="td-2">免费</td>
     			<td class="td-3">50元一次性</td>
     		</tr>
     	</table>
     </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			username:'',
			password:'',
			nickname:''
		}
	},
	methods: {
		reg(){			
			this.$http({
				method:'post',
				url:'http://localhost:3000/reg',
				data:{
					username:this.username,
					password:this.password
				}
			}).then(
				(res)=>{
					switch (res.data) {
						case 0:
							alert('用户名重复')
							break;
						case 2:
							alert('，服务器繁忙，等会在注册吧')							
							break;
						case 1:
							alert('注册成功，点击确认进入登录页面');
							this.$router.push('/user_login')
							break;											
					}
				}
			)
		}
	}
}
</script>



<style>
.register-box{ padding: 20px 15px 0; }
.register-box .row span,.register-box .row label{ float: left; color: #a9a9a9; font-size: 0.85rem;}
.register-box .row label{ margin-left: 1.5rem;}
.register-box .row label input{ margin-right: 5px;}
.register-box .row-txt{ margin-bottom: 10px;}
.register-box .row-txt p{font-size: 0.85rem;margin-left: 40px;}
.register-box .row-txt .checkbox{ 
    width: 16px;
    height: 16px;
    margin: 0.3rem 0.3rem 0 0;
    position: relative;
    background: #fff;
    border: solid 1px #dddddd;
    border-radius: 3px;
    -webkit-appearance: none;
    transition: background-color ease 0.1s;
    outline: none;
    float: left;
    }
.register-box .row-txt .checkbox:checked:after{
	content: "";
	background:url(../assets/images/icon-agree.png) -20px -2px no-repeat;
	background-size: 36px 16px; 
	display: block; 
	height: 16px; 
	width: 16px; 
	}

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

	.green-btn{ display: block; background: #40c8b9; text-align: center; color: #fff; cursor:pointer;}
	.green-btn:hover{ background: #5dd5c8;  color: #fff; transform:height ease 0.5s;}

.register-table{ margin: 20px 0;}
.register-table table{ width: 100%;background: #fff; border-collapse: collapse;}
.register-table th{text-align: center; color: #f96a26; font-size: 0.9rem; font-weight: normal; }
.register-table td{text-align: center;font-size: 0.8rem;}
.register-table td.td-1{ color: #ffc657;}
.register-table td.td-1 span,.register-table td.td-3{color: #f96a26;}
.register-table td.td-2{ color: #929292;}
.register-table th,.register-table td{ height: 2rem; line-height: 2rem; border-bottom: 1px solid #F3F7F7;border-left: 1px solid #F3F7F7;}

.btn-radio {
    width: 16px;
    height: 16px;
    position: relative;
    margin: 13px 5px;
    background: #ffffff;
    border: solid 1px #dddddd;
    border-radius: 50%;
    display: table;
    float: left;
    -webkit-appearance: none;
    transition: background-color ease 0.1s;
    outline: none;
}
.btn-radio:checked{ border: 1px solid #40C8B9;}
.btn-radio:checked:after{
	content: "";
	background-color:#40C8B9; 
	display: block; 
	height: 8px; 
	width: 8px; 
	margin: 4px; 
	border-radius: 50%;
	}
</style>


