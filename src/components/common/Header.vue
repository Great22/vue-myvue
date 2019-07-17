<template>
  <div class="header"  :style="{background:bg}">
    <p class="home" @click="goHome()">首页</p>

    <h2 class="title">
      <slot name="title">默认值</slot>
    </h2>
  </div>

</template>

<script>
  export default {
    methods: {
      goHome: function () {
        this.$router.push("/movie/movieList")
      }
    },
    props:["bg"]
  }
</script>

<style scoped>
  .header {
    height: 1rem;
    background-color: rgb(33, 150, 243);
    position: fixed;
    top: 0;
    width: 100%;
    font-weight: bold;
    line-height: 1rem;
  }

  .home {
    color: #fff;
    position: absolute;
    left: 10%;
    top: 10%;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 25px;
    transform: translate(-50%, -50%);
    color: #fff;
  }
</style>
