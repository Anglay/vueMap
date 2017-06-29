<template>
  <div id="app">
    <v-Header :module="module"></v-Header>
    <v-Navbar :nav-data="navData" :module="module" @setModule="setModule"></v-Navbar>
    <div class="v-main">
      <div class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="moduletext">{{moduletext}}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="subtext">{{subtext}}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="actiontext">{{actiontext}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/commons/header'
import Navbar from '@/components/commons/navbar'
import Store from 'store'

export default {
  name: 'app',
  data(){
      return {
        navData:[],
        module:"",
        moduletext:"",
        subtext:"",
        actiontext:""
      }
  },
  created (){
    this.navData = [{
        "text":"地图",
        "module":"map",
        "icon":"ui-icon ui-icon-instorage",
        "sub":[
            {
                "text":"地图",
                "id":"map",
                "link":"/map/map"
            }
          ]
      }]
  },
  methods:{
    setModule:function(params){
      this.module = params.id;
      this.moduletext = params.moduletext;
      this.subtext = params.subtext;
      this.actiontext = params.actiontext||"";
    }
  },
  components:{
    'v-Header':Header,
    'v-Navbar':Navbar
  }
}
</script>

<style lang="less">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
}
html,body{
  height: 100%;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
/* custom */
a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    text-decoration: none;
}

li {
    list-style: none;
}
.pull-right{
  float: right;
}
.pull-left{
  float: left;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.v-main{
  position:absolute;
  left: 100px;
  top: 80px;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  z-index: 9;
  .bread{
    padding: 10px;
    border-bottom: 1px solid #eaeefb;
  }
}
</style>
