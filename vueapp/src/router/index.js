import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieDetail from '@/components/movie/MovieDetail'
import MovieList from '@/components/movie/MovieList'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie/MovieList'
    },{
      path:'/movie',
      component:Movie,
      children:[
        {
          path: 'MovieList',
          component: MovieList
        },{
          path:'MovieDetail/:movieId',
          component: MovieDetail
        }
        
      ]
    },{
      path: '/book',
      component: Book
    },{
      path: '/photo',
      component: Photo
    },{
      path: '/music',
      component: Music,
      redirect: '/music/MusicList',
      children:[
        {
          path:'MusicList',
          component: MusicList
        },{
          path:'MusicAlbums/:musicId',
          component: MusicAlbums
        }
      ]
    }
  ]
})
