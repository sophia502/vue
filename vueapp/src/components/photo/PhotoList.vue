<template>
     <ul class='ph clearfix'>
           <li v-for=" (item,index) in photo" :key="index">
               <router-link :to="'/photo/PhotoDetail/'+ index">
               <img :src="item.src" alt="">
               </router-link>
            </li>
            
       </ul>
</template>
<script>
import Axios from "axios";
export default {
    data(){
      return{
          photo:[]
      }
  },
  mounted() {
    Axios.get("/static/data/photodata.json")
      .then(res => {
        // console.log(res);
        this.photo = res.data.photoData;
        // console.log(this.photo);
        //把数据存到vue
        this.$store.dispatch('setPhotoList',res.data.photoData);
        
      })
      .catch();
  }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.ph{
    margin: 1rem 0;
}
.ph li img{
    width: 50%;
    float: left;
}
</style>
