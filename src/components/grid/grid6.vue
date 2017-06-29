<template>
  	<div class="main">
    	<div class="search-container">
	      	<div class="search-form">
		        <el-form :inline="true" :model="formInline" class="demo-form-inline">
		          	<el-form-item label="审批人">
		            	<el-input v-model="formInline.user" placeholder="审批人"></el-input>
		          	</el-form-item>
		          	<el-form-item label="活动区域">
			            <el-select v-model="formInline.region" placeholder="活动区域">
			              	<el-option label="区域一" value="shanghai"></el-option>
			              	<el-option label="区域二" value="beijing"></el-option>
			            </el-select>
		          	</el-form-item>
		          	<el-form-item>
		            	<el-button type="primary" @click="onSubmit">查询</el-button>
		          	</el-form-item>
		        </el-form>
	      	</div>
	      	<div class="search-grid">
		        <el-table
				    :data="tableData"
				    style="width: 100%">
				    <el-table-column type="expand">
				      	<template scope="props">
					        <el-form label-position="left" inline class="demo-table-expand">
					          	<el-form-item label="商品名称">
					            	<span>{{ props.row.name }}</span>
					          	</el-form-item>
					          	<el-form-item label="所属店铺">
					            	<span>{{ props.row.shop }}</span>
					          	</el-form-item>
					          	<el-form-item label="商品 ID">
					            	<span>{{ props.row.id }}</span>
					          	</el-form-item>
					          	<el-form-item label="店铺 ID">
					            	<span>{{ props.row.shopId }}</span>
					          	</el-form-item>
					          	<el-form-item label="商品分类">
					            	<span>{{ props.row.category }}</span>
					          	</el-form-item>
					          	<el-form-item label="店铺地址">
					            	<span>{{ props.row.address }}</span>
					          	</el-form-item>
					          	<el-form-item label="商品描述">
					            	<span>{{ props.row.desc }}</span>
					          	</el-form-item>
					        </el-form>
				      	</template>
				    </el-table-column>
				    <el-table-column
				      	label="商品 ID"
				      	prop="id">
				    </el-table-column>
				    <el-table-column
				      	label="商品名称"
				      	prop="name">
				    </el-table-column>
				    <el-table-column
				      	label="描述"
				      	prop="desc">
				    </el-table-column>
				</el-table>
	      	</div>
	      	<div class="form-pagination">
		        <el-pagination
		          	@size-change="handleSizeChange"
		          	@current-change="handleCurrentChange"
		          	:current-page.sync="currentPage"
		          	:page-sizes="[10, 20, 50, 100]"
		          	:page-size="10"
		          	layout="sizes, ->,total, prev, pager, next, jumper"
		          	:total="tableData.length">
		        </el-pagination>
	      	</div>
    	</div>
  	</div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
	      id: '12987122',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987123',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987125',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987126',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987125',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987126',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987125',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987126',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987125',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987126',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987125',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }, {
	      id: '12987126',
	      name: '好滋好味鸡蛋仔',
	      category: '江浙小吃、小吃零食',
	      desc: '荷兰优质淡奶，奶香浓而不腻',
	      address: '上海市普陀区真北路',
	      shop: '王小虎夫妻店',
	      shopId: '10333'
	    }],
      currentPage: 1
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formInline.user);
    },
    handleSizeChange(val) {
      	console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      	console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="less" scoped>
  .search-container{
    height: auto;
    overflow: hidden;
    padding: 15px;
    .search-form{
      height: auto;
      overflow: hidden;
    }
    .search-grid{
      height: auto;
      overflow: hidden;
      .demo-table-expand {
	    font-size: 0;
	  }
	  .demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	  }
	  .demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	  }
    }
    .form-pagination{
      height: auto;
      overflow: hidden;
      padding: 15px 0;
      .el-pagination{
        padding: 0;
      }
    }
  }
</style>
