<template>
  <div>
    {{$route.params.musicId}}
    <a-player autoplay  :music="songs"></a-player>
  </div>

</template>

<script>
  import axios from"axios"
  import VueAplayer  from"vue-aplayer"
  export default {
    components: {
      "a-player": VueAplayer
    },
    data: function () {
      return {
        songs:{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }
      }
    }

  }
</script>

<style>

</style>
