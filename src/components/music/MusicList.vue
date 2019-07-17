<template>
  <div>
    <ul class="list">
      <li   v-for="(item,index) in num"  :key="index">
        <router-link :to="'/music/musicAibums/'+index">
          <img src="../../assets/img/222.jpg">
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
        num: [
          {item:111},
          {item:222},
          {item:333},
          {item:444},
          {item:555},
          {item:666}
        ],
        musicList: []
      }
    },
    mounted: function () {
      axios.get()
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {

        })
    }
  }
</script>

<style scoped>
  .list li {
    float: left;
    width: 50%;
  }

  .list li img {
    width: 100%;
  }
</style>
