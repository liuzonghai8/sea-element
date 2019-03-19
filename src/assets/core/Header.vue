<template>
  <div class="header">
    <!-- <core-hamburger> -->
    <Hamburger :is-active="change" :toggle-click="toggleSideBar"/>
    <Breadcrumb/>
  </div>
  <!-- <Screenfull/> -->
</template>
<script>
import Hamburger from '@/components/toolbar/header/Hamburger'
import Breadcrumb from '@/components/toolbar/header/Breadcrumb'
import Screenfull from '@/components/toolbar/header/Screenfull'
export default {
  data () {
    return {
      change: false
    }
  },
  components: {
    Hamburger,
    Breadcrumb,
    Screenfull
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
.header {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>

