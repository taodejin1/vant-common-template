<template>
    <div class="VantPage">
        <div class="file-uploader">
            <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
                上传图片
            </van-uploader>
        </div>
    </div>
</template>

<script>
import { Uploader } from 'vant';
import Vue from 'vue';
Vue.use(Uploader);

export default {
    data() {
        return {

        }
    },
    methods: {
        onRead(file) {
            console.log(file);
        }
    },

    created(){
        console.log(basePathApi);
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.VantPage{
    padding: 0.15rem;
    background: #fff;
}

</style>
