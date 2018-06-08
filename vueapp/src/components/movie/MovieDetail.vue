<template>
     <div class="detail">
         <br>
        <div class="detail-content">
            <div class="detail-img">
                <img :src="detail.img" alt="">
            </div>
            <div class="detail-info">
                <h4 v-text="detail.nm"></h4>
                <p v-text="detail.sc+'分'"></p>
                <p>{{detail.cat}}</p>
                <p>{{detail.src}} / {{detail.dur}}分钟</p>
                <p>{{detail.rt}}</p>
            </div>
        </div>
        <br>
        <hr>
        <div>
            <h3>主演</h3>
            <p>{{detail.star}}</p>
            <br>
        </div>
        <hr>
        <div>
            <h3>简介</h3>
            <div v-html="detail.dra"></div>
        </div>
        
    </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    Axios.get(
      global.API_PROXY +
        "http://m.maoyan.com/movie/" +
        this.$route.params.movieId +
        ".json"
    ).then(res => {
      console.log(res);
      this.detail = res.data.data.MovieDetailModel;
    });
  }
};
</script>
<style scoped>
.detail {
  margin: 1rem 0;
  padding: 0 0.2rem;
}
.detail-content {
  display: flex;
}
.detail-img {
  flex-grow: 1;
  width: 0;
}
.detail-info {
  flex-grow: 1;
  width: 0;
  margin-left: 0.2rem;
}
.detail h3,h4 {
  font-weight: 600;
  text-align: center;
}
</style>
