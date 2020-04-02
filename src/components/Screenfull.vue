<template>
  <div>
    <img class="icon" v-if="isFullscreen" src="../assets/icon_full_off.png" alt="" @click="click">
    <img class="icon" v-else src="../assets/icon_full_on.png" alt="" @click="click">
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: '您的浏览器不可用',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
