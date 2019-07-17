<template>
  <div>
    <common-header bg="rgb(0,150,30)">
      <span slot="title">Music</span>
    </common-header>
    <router-view></router-view>
    <common-footer bg="rgb(0,150,30)"></common-footer>

  </div>
</template>

<script>
  import  CommonHeader  from "../common/header"
  import  CommonFooter  from "../common/Footer"

  export default {
    components: {
      CommonHeader: CommonHeader,
      CommonFooter: CommonFooter
    }
  }
</script>

<style>

</style>
