<template>
    <div class="movie-list">
        <ul>
            <li @click="goDetail(movie.id)" v-for="movie in movieList" :key="movie.id" class="movie">
                <div class='movie-img'>
                    <img :src="movie.img" alt="">
                </div>
                <div class='movie-info'>
                    <p v-text="movie.nm" class='movie-name'></p>
                    <p v-text="movie.cat"></p>
                    <!-- <p v-text="movie.scm">{{movie.scm}}</p> -->
                    <p>主演：{{movie.star}}</p>                    
                    <p>导演：{{movie.dir}}</p>
                    <p v-text="movie.rt"></p>
                    <p v-text="movie.ver"></p>
                   <!-- <p>{{movie.showInfo}}</p> -->
                </div>
                
            </li>
        </ul>
        <div v-show="loadingShow" class='loading'>
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div class='tip' v-show="tip">
            <h3>已经到底啦，木有啦...</h3>
        </div>
    </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      loadingShow: true,
      tip: false,
      a: false
    };
  },
  mounted() {
    this.loadData();
    //判断滚动位置
    window.onscroll = () => {
      let clientHeight = document.documentElement.clientHeight; //获取可视区域高度
      let scrollTop = document.documentElement.scrollTop; //获取滚动条高度
      let scrollHeight = document.documentElement.scrollHeight; //获取整个高度
        // console.log(clientHeight +'--'+scrollTop+'--'+scrollHeight);
      //判断是否到底
      if (clientHeight + scrollTop >= scrollHeight) {
        console.log("到底");
        if (!this.tip) {
          this.loadData();
        } else {
          this.loadingShow = false;
        }
      }
    };
  },
  methods: {
    loadData() {
      Axios.get(
        global.API_PROXY +
          "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
          this.movieList.length
      )
        .then(res => {
          if (res.data.data.movies.length < 10) {
            this.tip = true;
          }

          this.movieList = this.movieList.concat(res.data.data.movies); //concat数组拼接

            console.log(this.movieList);
        })
        .catch(() => {
          alert("获取内容失败");
        });
    },
    goDetail(movieId){
        this.$router.push('/movie/movieDetail/'+movieId);
    }
  }
};
</script>
<style scoped>
.movie-list {
  margin: 1rem 0;
}
.movie {
  display: flex;
  margin: 0.2rem;
  padding: 0.1rem 0;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex-grow: 1;
  width: 0;
  margin-right: 0.2rem;
}
.movie-info {
  flex-grow: 2;
  width: 0;
}
.movie-name {
  font-weight: 600;
  font-size: 0.25rem;
}
p {
  font-size: 0.2rem;
}
.loading {
  /* margin-top: 2rem; */
  text-align: center;
}
.tip{
  text-align: center;    
}
</style>
