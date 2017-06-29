<template>
	<div>
		<div id="allmap" class="allmap" :style="{width: '100%', height: winHeight + 'px'}"></div> 
	</div>
</template>

<script type="text/javascript">
	import BMap from 'BMap';
	export default {
		computed:{
			winHeight:function(){
				return document.body.clientHeight-115;
			}
		},
		mounted () {
		    this.ready();
		},  
		methods: {
		    ready: function () {  
		      	var mp = new BMap.Map("allmap");
				var point = new BMap.Point(120.151324,30.297388);
				var marker = new BMap.Marker(point);
				mp.addOverlay(marker);
				mp.centerAndZoom(point, 18);
		    }  
		}  
	}
</script>

<style lang="less">  
  /* 去掉地图左下角的百度LOGO */
  .anchorBL {  
    display:none  
  }  
</style>  