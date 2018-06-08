<template>
    <div class="star">
        <common-header bg='rgb(243, 178, 83)'>
            <span slot="title">photo</span>            
        </common-header>
       <ul class='ph'>
           <li v-for=" (item,index) in photo" :key="index">
               <img :src="item.src" alt="">
            </li>
            
       </ul>
        <common-footer bg='rgb(243, 178, 83)'></common-footer>
    </div>
</template>
<script>
import CommonHeader from "../common/Header";
import CommonFooter from "../common/Footer";
import Axios from "axios";
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  data(){
      return{
          photo:[]
      }
  },
  mounted() {
    Axios.get("/static/data/photodata.json")
      .then(res => {
        console.log(res);
        this.photo = res.data.photoData;
        console.log(this.photo);
        
      })
      .catch();
  }
};
</script>
<style scoped>

.ph {
  margin: 1rem 0; 
  height: 1500px;
}
.ph li img{
    width: 50%;
    float: left;
}
</style>

