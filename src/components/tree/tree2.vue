<template>
	<div class="tree-container">
		<el-tree
		  	:data="regions"
		  	:props="props"
		  	:load="loadNode"
		  	lazy
		  	show-checkbox
		  	@check-change="handleCheckChange">
		</el-tree>
	</div>
</template>

<script type="text/javascript">
	export default {
    	data() {
      		return {
		        regions: [{
		          	'name': 'region1'
		        }, {
		          	'name': 'region2'
		        }, {
		          	'name': 'region3'
		        }],
		        props: {
		          	label: 'name',
		          	children: 'zones'
		        },
		        count: 1
	      	}
	    },
	    methods: {
	      	handleCheckChange(data, checked, indeterminate) {
	        	console.log(data, checked, indeterminate);
	      	},
	      	handleNodeClick(data) {
	        	console.log(data);
	      	},
	      	loadNode(node, resolve) {
		        if (node.level === 0) {
		          	return resolve([{ name: 'region1' }, { name: 'region2' }, { name: 'region3' }]);
		        }
		        if (node.level > 3) return resolve([]);

		        var hasChild;
		        if (node.data.name === 'region1') {
		         	hasChild = true;
		        } else if (node.data.name === 'region2') {
		          	hasChild = false;
		        } else {
		          	hasChild = Math.random() > 0.5;
		        }

		        setTimeout(() => {
		          	var data;
		          	if (hasChild) {
			            data = [{
			              	name: 'zone' + this.count++
			            }, {
			              	name: 'zone' + this.count++
			            }];
		          	} else {
		            	data = [];
		          	}

		          	resolve(data);
		        }, 500);
	      	}
	    }
  	};
</script>

<style lang="less" scoped>
	.tree-container{
		padding: 25px 50px;
	}
</style>