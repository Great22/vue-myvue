<template>
  <div>
    <common-header bg="rgb(121,85,72)">
      <span slot="title">Book</span>
    </common-header>

    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../../assets/img/1.jpg" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view></router-view>
    <common-footer bg="rgb(121,85,72)"></common-footer>

  </div>
</template>

<script>
  import  CommonHeader  from "../common/header"
  import  CommonFooter  from "../common/Footer"
  //  require("vue-swiper/dist/vue-swiper.css")
//  import {Swiper,SwiperItem}   from "vue-swiper"
  export default {
    data: function () {
      return {}
    },
    components: {
      CommonHeader: CommonHeader,
      CommonFooter: CommonFooter
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .block img {
    width: 100%;
  }
</style>
