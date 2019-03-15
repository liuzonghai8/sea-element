<template>
  <el-header>
    <!-- <core-hamburger> -->
    <Hamburger :is-active="change" :toggle-click="toggleSideBar"/>
  </el-header>
</template>
<script>
import Hamburger from '../toolbar/Hamburger'
export default {
  data () {
    return {
      change: false
    }
  },
  components: {
    Hamburger
  },
  methods: {
    toggleSideBar () {
      console.log("点击了")
      this.change = !this.change
    }
  }

}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>

