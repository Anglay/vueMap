<template>
	<div class="header">
		<h1>优仓官网管理系统</h1>
		<div class="header-right">
            <span class="span-icon-loginout"></span>
            <span class="span-icon-message"></span>
            <span class="span-text">小强</span>
        </div>
	</div>
</template>

<script type="text/javascript">
	import Store from 'store'

	export default {
	  	name: 'header',
	  	data () {
	    	return {
	    		
	    	}
	  	}
	}
</script>

<style lang="less" scoped>
	.header{
		position: absolute;
		height: 79px;
		background: #f5faff;
		top: 0;
		right: 0;
		left: 100px;
		border-bottom: 1px solid #d0e2fa;
		z-index: 100;
		h1 {
		    color: #333;
		    display: inline-block;
		    float: left;
		    font-size: 18px;
		    font-weight: bold;
		    height: 79px;
		    line-height: 75px;
		    padding: 0 25px;
		}
		.header-right {
		    display: inline-block;
		    float: right;
		    height: 79px;
		    padding: 0 20px;
		    span {
			    display: inline-block;
			    height: 25px;
			    margin-top: 30px;
			    min-width: 25px;
			    position: relative;
			    float: right;
			    margin-left: 10px;
			}
			span.span-text {
			    color: #666;
			    font-size: 14px;
			    line-height: 25px;
			}
			span.span-icon-message {
			    background: rgba(0, 0, 0, 0) url("../../assets/icon-msg.png") no-repeat scroll center center;
			    cursor: pointer;
			}
			span.span-icon-loginout {
			    background: rgba(0, 0, 0, 0) url("../../assets/icon-login-out.png") no-repeat scroll center center;
			    cursor: pointer;
			}
		}

	}
</style>