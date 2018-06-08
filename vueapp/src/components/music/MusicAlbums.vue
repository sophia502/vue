<template>
    <div class="list">
        <Aplayer  v-if="isShow" :list='music' :autoplay="true" :music="songs" showLrc :mutex="true"></Aplayer>
    </div>
</template>
<script>
import Aplayer from "vue-aplayer";
import Axios from "axios";
export default {
  data() {
    return {
      songs: '',
      music:[],
      isShow: false
    };
  },
  components: {
    Aplayer
  },
  
  mounted() {
    Axios.get("/static/data/musicdata.json")
      .then(res => {
        let list = res.data.musicData;
        list.forEach(element => {
          let obj = {
            title: element.title,
            artist: element.author,
            src: element.src,
            pic: element.musicImgSrc,
            lrc: "/static/" + element.lrc
          }
          this.music.push(obj);
          this.songs = obj;
        });
        this.isShow = true; 
        console.log(this.songs);
        // console.log(typeof(this.songs));
      })
      .catch();
  }
};
</script>
<style scoped>
.list {
  margin: 1rem 0;
}
</style>

