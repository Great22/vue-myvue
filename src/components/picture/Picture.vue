<template>
  <div>
    <common-header bg="rgb(63,81,181)">
      <span slot="title">Picture</span>
    </common-header>
    <router-view></router-view>

    <common-footer bg="rgb(63,81,181)"></common-footer>

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
