<template>
  <div>
    <common-header  bg="rgb(20,131,233)">
      <span slot="title">Movie</span>
    </common-header>
    <router-view></router-view>
    <common-footer bg="rgb(20,131,233)"></common-footer>

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
