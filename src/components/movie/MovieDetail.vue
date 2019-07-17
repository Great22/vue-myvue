<template>
  <div class="detail">

    <div class="detail-content">
      <div class="detail-img">
        <!--<img src="../../assets/img/4-1.jpg" alt=""/>-->
        <img :src="detail.poster" alt=""/>
      </div>
      <div class="detail-info">
        <span v-text="detail.title"></span>

        <p>{{detail.rating}}</p>

        <p>{{detail.genres}}</p>

        <p>{{detail.country}}{{detail.runtime}}</p>

        <p>{{detail.year}}</p>

      </div>
    </div>
    <div>
      <span>演员</span>

      <p>{{detail.actors}}</p>
    </div>
    <div>
      <span>简介</span>

      <p>{{detail.plot_simple}}</p>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        detail: {
          "movieid": "78066",
          "rating": "7.8",
          "genres": "惊悚\/剧情\/犯罪",
          "runtime": "Germany:121 min (Berlin International Film Festival)",
          "language": "德语\/乌克兰语",
          "title": "复仇",
          "poster": "http:\/\/img31.mtime.cn\/mt\/2014\/02\/23\/055018.63859123_270X405X4.jpg",
          "writers": "格特兹·斯佩曼尼",
          "film_locations": "奥地利",
          "directors": "格特兹·斯佩曼尼",
          "rating_count": "396",
          "actors": "约翰尼斯·科斯奇 Johannes Krisch,艾瑞娜·波塔佩科 Irina Potapenko,乌苏拉·斯特劳斯 Ursula Strauss,Andreas Lust",
          "plot_simple": "　　本片讲述了一对生活在红灯区的夫妇的故事。一直靠打杂为生的亚历克斯（约翰尼斯·科斯奇饰）打算带着妓女妻子塔尔玛（艾瑞娜·波塔佩科饰）离开这个淫逸是非之地。然而，他们在离开红灯区后并没有迎来崭新的生活，相反，迫于沉重的生活压力，他们洗劫了一家乡村银行，最后被警察穷追不舍。在痛苦和绝望中，这对夫妇决定向社会复仇。",
          "year": "2008",
          "country": "奥地利",
          "type": null,
          "release_date": "20081231",
          "also_known_as": "维也纳复仇.....(台湾译名),把哀伤留给复仇"
        }

      }
    },
    mounted: function () {
      var that = this;
      var key = "a96e3f0364e7ba815d3c18a9dbfbce48";
      var url = "/movie/index?key=" + key + "&title=复仇";
      var url1 = "/static/detaildata.json"
      axios.get("/api/" + url)
        .then(function (res) {
          console.log(res)
          console.log(res.data.result[0]);
//          if (res.data.reason == "成功的返回") {
//            that.detail = res.data.result[6];
//
//          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    methods: {}
  }
</script>
<style>
  .detail {
    padding: 0 0.2rem;
    text-align: left;
    font-size: 16px;
  }

  .detail-content {
    display: flex;
  }

  .detail-img {
    -webkit-box-flex-group: 1;
    margin-right: 0.2rem;
  }

  .detail-info {
    -webkit-box-flex-group: 2;
    border-bottom: 1px solid #ccc;
  }

  .detail-img img {
    width: 2.4rem;
  }

  p {
    margin-top: 5px;
  }

  div span {
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
  }
</style>
