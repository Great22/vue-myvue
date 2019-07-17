<template>

  <div class="picture">
    <ul class="clearfix">
      <li v-for="(item,index) in 24">
        <router-link :to="'/picture/pictureDetail/'+index">
          <img src="../../assets/img/111.jpg" alt=""/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        pictureList: []
      }
    },
    mounted: function () {
      var that = this;
      axios.get("https://www.apiopen.top/meituApi?page=1")
        .then(function (res) {
          console.log(res.data.data[0].url)
          // that.pictureList = res.data.data;
//          that.$store.dispatch("setPictureList", res.data.data)
          console.log(that.$store)
        }).catch(function (err) {
          alert(err)
        })
    }
  }
</script>)

<style scoped>
  @import url("../../assets/css/common.css");

  .picture {

  }

  .picture li {
    width: 50%;
    float: left;
  }

  .picture li img {
    width: 100%;
  }
</style>
