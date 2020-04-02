<template>
  <el-container>
    <div class="aside-container" :class="{'hide-aside': hideAside}">
      <div class="my-logo">
        <img src="../assets/logo.png" alt="">
        <span v-show="!isCollapse">后台管理</span>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        default-active="1-4-1"
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <router-link :to="{path:'home'}">
            <el-menu-item index="1-1">首页</el-menu-item>
          </router-link>
          <router-link :to="{path:'demo'}">
            <el-menu-item index="1-2">demo页</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <el-container>
      <el-header class="layout-header">
        <div class="fold" @click="changeCollapse" v-if="isCollapse"><i class="el-icon-s-unfold"></i></div>
        <div class="fold" @click="changeCollapse" v-else><i class="el-icon-s-fold"></i></div>
        <div class="flex-item"></div>
        <screenfull id="screenfull"></screenfull>
        <div>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Tale</span>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Screenfull from '@/components/Screenfull'
export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: false,
      hideAside: false
    }
  },
  methods: {
    changeCollapse() {
      let { isCollapse } = this;
      this.isCollapse = !isCollapse;
      this.hideAside = !isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    Screenfull
  }
}
</script>
<style lang="scss">
  @import '../styles/variables';
  .aside-container {
    transition: width 0.3s;
    width: 200px !important;
    background: #2c3e50;
    height: 100vh;
    overflow-y: hidden;
    border-right: 1px solid #eeeeee;
    &.hide-aside {
      width: 65px !important;
    }
    .my-logo {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #ffffff;
      background: $subMenuHover;
      img {
        width: 40px;
        margin-right: 10px;
      }
    }
    .el-menu {
      height: calc(100% - 60px);
      overflow-y: scroll;
      border-right: none;
      background: $menuBg;
      color: $menuText;
      .el-menu-item {
        color: $menuText;
        &:hover, &:focus {
          background: $menuHover;
        }
        i {
          color: $menuText;
        }
      }
      .el-submenu__title {
        color: $menuText;
      }
      .el-menu-item-group {
        background: $subMenuBg;
      }
    }
    .el-submenu__title {
      &:hover {
        background-color: $menuHover !important;
      }
    }
    .el-menu-item {
      &.is-active {
        color: $menuActiveText !important;
      }
    }
    .el-submenu .el-menu-item {
      background-color: $subMenuBg !important;
      &:hover {
        background-color: $subMenuHover !important;
      }
    }
  }
  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #515151;
    font-size: 16px;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    .fold {
      font-size: 24px;
      cursor: pointer;
    }
    .flex-item {
      flex: 1;
    }
  }
</style>
