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
				    border
				    style="width: 100%">
				    <el-table-column
				      	label="日期"
				      	prop="date"
				      	sortable
				      	width="180">
				      	<template scope="scope">
					        <el-icon name="time"></el-icon>
					        <span style="margin-left: 10px">{{ scope.row.date }}</span>
				      	</template>
				    </el-table-column>
				    <el-table-column
				      	label="姓名"
				      	width="180">
				      	<template scope="scope">
				        	<el-popover trigger="hover" placement="top">
					          	<p>姓名: {{ scope.row.name }}</p>
					          	<p>住址: {{ scope.row.address }}</p>
					          	<div slot="reference" class="name-wrapper">
					            	<el-tag>{{ scope.row.name }}</el-tag>
					          	</div>
				        	</el-popover>
				      	</template>
				    </el-table-column>
				    <el-table-column
				      	prop="tag"
				      	label="标签"
				      	width="100"
				      	:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
				      	:filter-method="filterTag"
				      	filter-placement="bottom-end">
				      	<template scope="scope">
				        	<el-tag
				          		:type="scope.row.tag === '家' ? 'primary' : 'success'"
				          		close-transition>{{scope.row.tag}}</el-tag>
				      	</template>
				    </el-table-column>
				    <el-table-column label="操作">
				      	<template scope="scope">
				        	<el-button
				          	size="small"
				          	@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        	<el-button
				          	size="small"
				          	type="danger"
				          	@click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      	</template>
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
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '家'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '家'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }],
      currentPage: 1
    }
  },
  methods: {
  	formatter(row, column) {
        return row.address;
    },
    filterTag(value, row) {
        return row.tag === value;
    },
    onSubmit() {
      console.log(this.formInline.user);
    },
    handleSizeChange(val) {
      	console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      	console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
    	console.log(index, row);
  	},
 	handleDelete(index, row) {
    	console.log(index, row);
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
