<template>
  <ul class="footer" :style="{background:bg}">
    <li>
      <router-link to="/movie/movieList">电影</router-link>
    </li>
    <li>
      <router-link to="/music">音乐</router-link>
    </li>
    <li>
      <router-link to="/book">书籍</router-link>
    </li>
    <li>
      <router-link to="/picture">图片</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ["bg"]
  }
</script>

<style scoped>
  .footer {
    height: 1rem;
    background-color: rgb(33, 150, 243);
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    line-height: 1rem;
  }

  .footer li {
    -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1; /* OLD - Firefox 19- */
    width: 20%; /* For old syntax, otherwise collapses. */
    -webkit-flex: 1; /* Chrome */
    -ms-flex: 1; /* IE 10 */
    flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
    text-align: center;
    color: #fff;
  }

  .footer a {
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
  }

  .footer a.router-link-active {
    color: #FFF;
  }
</style>
