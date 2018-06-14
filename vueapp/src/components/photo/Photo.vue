<template>
    <div>
        <common-header bg='rgb(243, 178, 83)'>
            <span slot="title">photo</span>            
        </common-header>
        <router-view></router-view>
        <common-footer bg='rgb(243, 178, 83)'></common-footer>
    </div>
</template>
<script>
import CommonHeader from "../common/Header";
import CommonFooter from "../common/Footer";

export default {
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>
<style scoped>

</style>

