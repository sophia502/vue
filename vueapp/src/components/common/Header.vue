<template>
<div class="header" :style="{background:bg}">
    <button @click="goHome">首页</button>
    <h1>
        <slot name="title">默认值</slot>
    </h1>

</div>
    
</template>
<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/');
        }
    },
    props:['bg']
}
</script>
<style scoped>
.header{
    height: 1rem;
    background-color: rgb(33, 150, 243);
    position: fixed;
    top: 0;
    width: 100%;
    line-height: 1rem;
}
.header button{
    color: #fff;
    margin-left: 0.2rem;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
}
.header h1{
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
