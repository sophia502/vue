<template>
<ul class='footer' :style="{background:bg}">
    <li><router-link to="/movie/MovieList">电影</router-link></li>
    <li><router-link to="/music">音乐</router-link></li>
    <li><router-link to="/book">阅读</router-link></li>
    <li><router-link to="/photo">图片</router-link></li>
</ul>
    
</template>
<script>
export default {
    props:['bg']
}
</script>
<style scoped>
.footer {
  height: 1rem;
  background-color: rgb(33, 150, 243);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  line-height: 1rem;
}
.footer li{
    flex-grow: 1;
    color: #fff;
    text-align: center;
}
.footer li a{
    color: #4d5d65;
}
.footer a.router-link-active{
    color: #fff;
}
</style>
