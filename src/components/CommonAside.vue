<template>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <h3>{{isCollapse ? '后台':'交通后台管理系统'}}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem, subIndex) in item.Children" :key="subItem.path">
        
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 910px;
  }
  .el-menu{
    height: 100vh;
    border: none;
    h3{
      color: #fff;
      text-align: center;
      line-height:48px
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        menu:[              //存放数据
        {
          path:'/MyHome',
          name:'MyHome',
          label:'首页',
          icon:'s-home',
          url:'MyHome/MyHome'
          //等等
        },
        {
          path:'/SeeOver',
          name:'SeeOver',
          label:'当前查看',
          icon:'video-play',
          url:'SeeManage/SeeManage'

        },
        {
          path:'/user',
          name:'user',
          label:'人工管理',
          icon:'user',
          url:'UserManage/UserManage'

        },
        {
          label:'其他',
          icon:'location',
          Children:[
            {
              path:'/page1',
              name:'page1',
              label:'视频接入',
              icon:'setting',
              url:'Other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'违法预警',
              icon:'setting',
              url:'Other/pageTwo'
            }
          ]
        }

        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name
        })
        this.$store.commit('selectMenu',item)
      }
    },
    computed:{
      noChildren() {
        return this.menu.filter(item => !item.Children)
      },
      hasChildren() {
        return this.menu.filter(item => item.Children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    }
  }
</script>
