<template>
    <div id="app">
        <div id="fullScreenMask"></div>
        <router-view />
    </div>
</template>

<script>
import flexible from '@/assets/js/flexible.js' // 引入rem换算px脚本  640设计稿 1rem=100px
export default {
    name: "App"
};

</script>

<style scoped lang='scss'>
@import './assets/css/reset.css';  // 引入css重置样式 
@import './assets/css/common.css';  // 引入全局通用样式 

body,html,#app {
    height: 100%;
}
#app {
    font-size: 0.14rem;
    max-width: 768px;
    margin: 0 auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    #fullScreenMask {
        position: fixed;
        background-color: rgb(236, 237, 239);
        top: -300px;
        left: -10px;
        right: -10px;
        bottom: -300px;
        z-index: -1;
    }
}

</style>
