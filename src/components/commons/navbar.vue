<template>
	<div class="navbar">
		<div class="header-logo"></div>
		<ul class="nav-list">
			<li class="nav-list-item">
				<a href="#/" :class="{'active':module=='home'}" @click="goMain">
					<span class="nav-icon">主页</span>
				</a>
			 </li>
			<li class="nav-list-item" v-for="item in navData">
				<a href="javascript:void(0);" :class="{'active':module==item.module}">
					<span class="nav-icon">{{item.text}}</span>
					<div class="nav-list-sub-item" v-if="item.sub">
						<router-link 
							v-for="sub in item.sub" 
							:to="sub.link" 
							@click.native="setModule(item.module,item.text,sub.text)" 
							:key="sub.id">
								{{sub.text}}
						</router-link>
					</div>
				</a>
			 </li>
        </ul>
	</div>
</template>

<script type="text/javascript">
	import Store from 'store'

	export default {
	  	name: 'navber',
	  	props:['navData'],
	  	data () {
	    	return {
	    		module:""
	    	}
	  	},
	  	mounted(){
	  		if (Store.get("module")) {
		      	this.module = Store.get("module");
		    }
	  	},
	  	methods:{
	  		goMain:function(){
	  			Store.set("module","home");
	  			this.module = "home";
	  			var params = {
	  				id:"home",
	  				moduletext:"",
	  				subtext:""
	  			}
	  			this.$emit('setModule', params);
	  		},
	  		setModule:function(id,moduletext,subtext){
	  			Store.set("module",id);
	  			this.module = id;
	  			var params = {
	  				id:id,
	  				moduletext:moduletext,
	  				subtext:subtext
	  			}
	  			this.$emit('setModule', params);
	  		}
	  	}
	}
</script>

<style lang="less" scoped>
	.navbar{
		position: absolute;
		width: 100px;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 90;
		background: #424b7d;
		background-image:url("../../assets/bg-side.png");
	    background-position: left bottom;
	    background-repeat: no-repeat;
	    background-size: 100px auto;
	    .header-logo{
	    	background: #4796ef url("../../assets/logo.png") no-repeat scroll center center;
		    box-shadow: 2px 5px 5px -2px #39416c;
		    height: 79px;
	    }
	    .nav-list {
		    width: 100px;
		    .nav-list-item {
			    height: 90px;
			    a{
				    border-left: 3px solid #424b7d;
				    border-right: 3px solid #424b7d;
				    display: block;
				    height: 90px;
				    position: relative;
				    width: 94px;
				    span {
					    color: #ccd0eb;
					    display: inline-block;
					    font-size: 16px;
					    height: 50px;
					    line-height: 50px;
					    padding-top: 40px;
					    text-align: center;
					    width: 94px;
					}
				    span.nav-icon {
					    background: rgba(0, 0, 0, 0) url("../../assets/icon-nav.png") no-repeat scroll center 20px;
					}
					.nav-list-sub-item {
					    background: #343c6a none repeat scroll 0 0;
					    display: none;
					    height: auto;
					    left: 97px;
					    padding-bottom: 10px;
					    position: absolute;
					    top: 0;
					    width: 155px;
					    a {
						    display: block;
						    font-size: 14px;
						    height: 35px;
						    line-height: 35px;
						    margin: 0;
						    padding: 0 0 0 25px;
						    text-align: left;
						    width: 130px;
						    border:none;
						    color: #ccd0eb;
						}
						a.active, a:hover {
						    background: #4796ef url("../../assets/icon-arr-right.png") no-repeat scroll 15px center;
						    color: #fff;
						}
					}
				}
				a.active ,a:hover{
				    background: #343c6a none repeat scroll 0 0;
				    border-left: 3px solid #4796ef;
				    border-right: 3px solid #343c6a;
				}
				a:hover > span {
				    color: #fff;
				}
				a:hover .nav-list-sub-item {
				    display: block;
				}
			}	
		}
	}
</style>