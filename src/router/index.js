import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

// var Main = {template:"<p>Main</p>"}

//grid
import Grid1 from '@/components/grid/grid1'
import Grid2 from '@/components/grid/grid2'
import Grid3 from '@/components/grid/grid3'
import Grid4 from '@/components/grid/grid4'
import Grid5 from '@/components/grid/grid5'
import Grid6 from '@/components/grid/grid6'

//map
import map from '@/components/map/map'

//tree
import Tree1 from '@/components/tree/tree1'
import Tree2 from '@/components/tree/tree2'


Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  	routes: [{
      	path: '/',
      	name: 'Main',
      	component: Main
	},{
      	path: '/grid/grid1',
      	name: 'grid1',
      	component: Grid1
	},{
      	path: '/grid/grid2',
      	name: 'grid2',
      	component: Grid2
	},{
      	path: '/grid/grid3',
      	name: 'grid3',
      	component: Grid3
	},{
      	path: '/grid/grid4',
      	name: 'grid4',
      	component: Grid4
	},{
      	path: '/grid/grid5',
      	name: 'grid5',
      	component: Grid5
	},{
      	path: '/grid/grid6',
      	name: 'grid6',
      	component: Grid6
	},{
            path: '/map/map',
            name: '地图组件',
            component: map
      },{
      	path: '/tree/tree1',
      	name: 'tree1',
      	component: Tree1
	},{
      	path: '/tree/tree2',
      	name: 'tree2',
      	component: Tree2
	}]
})
