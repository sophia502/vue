<template>
<div>
    <common-header>
        <span slot="title">movie</span>
    </common-header>
    <router-view/>
    <common-footer></common-footer>
</div> 
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonHeader,
        CommonFooter
    }
}
</script>
<style scoped>

</style>
