<template>
  <div class="movie-list">
    <!--<router-link to="movie/movieDetail"> 也可以用此包裹著</router-link>-->
    <ul>
      <li v-for="item in movieList" :key="item.id" class="movie" @click="goDetail(item.id)">
        <div class="movie-img">
          <img src="../../assets/img/4-1.jpg" alt=""/>
        </div>
        <div class="movie-info">
          <p class="info-desc">{{item.desc}}</p>

          <p class="info-img">
            <span>
              <img src="../../assets/img/plays.png" alt=""/>
              {{item.playCount}}
            </span>

            <span>
              <img src="../../assets/img/comment-o.png" alt=""/>
              {{item.commentCount}}</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="loadShow">
      <img src="../../assets/img/loading.gif" alt=""/>
    </div>
    <div v-show="tip">
      <p>数据已经完了！</p>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        movieList: [],
        loadShow: false,
        tip: false
      }
    },
    mounted: function () {
      this.loadData();
      var that = this;
      window.onscroll = function () {//鼠标滚动事件
        var clientHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight;
        if (clientHeight + scrollTop == scrollHeight) {
          that.loadShow = true;
          if (!that.tip) {
            that.loadData();
          } else {
            that.loadShow = false;
          }
        }
      }

    },
    methods: {
      loadData: function () {
        var url1 = "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList";
        var url2 = "/static/moviedata.json";
        var key="a96e3f0364e7ba815d3c18a9dbfbce48";
        var url3="http://v.juhe.cn/movie/index?title=复仇&key="
        var that = this;
        axios.get(url1)
          .then(function (res) {
            console.log(res.data.data.videosList);
            var list = res.data.data.videosList;
            var data = list.slice(that.movieList.length, that.movieList.length + 10);
            if (data.length < 10) {
              that.tip = true;
            }
            that.movieList = that.movieList.concat(list.slice(that.movieList.length, that.movieList.length + 10));

          })
          .catch(function (data) {
            alert("数据错误")
          })
      },
      goDetail:function(id){
        this.$router.push("/movie/movieDetail/"+id)
      }
    }
  }
</script>

<style scoped>
  .movie-list {
    margin: 1rem 0;
  }

  .movie {
    display: flex;
    padding: 0.2rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  .movie-img {
    -webkit-box-flex-group: 1;
    margin-right: 0.2rem;
  }

  .movie-img img {
    width: 2.4rem;
  }

  .movie-info {
    -webkit-box-flex-group: 2;
  }

  .info-desc {
    font-weight: bolder;
  }

  .info-img img {
    width: 0.3rem;
  }

</style>
