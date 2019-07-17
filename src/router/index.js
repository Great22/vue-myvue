import Vue from 'vue'
import Router from 'vue-router'

import Movie  from"@/components/movie/movie"
import MovieList  from"@/components/movie/MovieList"
import MovieDetail  from"@/components/movie/MovieDetail"
import Music  from"@/components/music/Music"
import MusicList  from"@/components/music/MusicList"
import MusicAibums  from"@/components/music/MusicAibums"
import Book  from"@/components/book/Book"

import Picture  from"@/components/picture/Picture"
import PictureList  from"@/components/picture/PictureList"
import PictureDetail  from"@/components/picture/PictureDetail"


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/movie',
      name: 'Movie',
      component: Movie,
      redirect: "/movie/movieList",
      children: [
        {
          path: "movieList",
          name: "movieList",
          component: MovieList
        },
        {
          path: "movieDetail/:movieId",
          name: "movieDetail",
          component: MovieDetail
        }
      ]
    },
    {
      path: "/book",
      component: Book
    },
    {
      path: "/music",
      component: Music,
      redirect: "/music/musicList",
      children: [
        {
          path: "musicList",
          component: MusicList
        },
        {
          path: "musicAibums/:musicId",
          component: MusicAibums
        }
      ]
    },
    {
      path: "/picture",
      component: Picture,
      redirect: "/picture/pictureList",
      children: [
        {
          path: "pictureList",
          component: PictureList
        },
        {
          path: "pictureDetail/:id",
          component: PictureDetail
        }
      ]
    }

  ]
})
