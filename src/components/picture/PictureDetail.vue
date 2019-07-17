<template>

  <v-touch class="detail" ref="hh" @swipeleft="goLeft()" @swiperight="goRight()" @tap="tap()">
    <img src="../../assets/img/111.jpg" alt=""/>
  </v-touch>
</template>

<script>
  export default {
    data: function () {
      return {
        nowIndex:0,
        objSty: {
//          background: "#000 url(../../assets/img/111.jpg)"

        }
      }
    },
    mounted: function () {
//      console.log(this.$refs.hh.style)
    },
    methods: {
      goLeft: function () {
        console.log("left")
      },
      goRight: function () {
        console.log("right")
      },
      tap: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .detail {
    margin: 1rem 0;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
  }

  .detail img {
    width: 100%;
    height: 250px;
    margin-top: 150px;
  }
</style>
