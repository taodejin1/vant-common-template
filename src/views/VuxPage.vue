<template>
    <div id="VuxPage">
        <datetime
            v-model="birth"
            @on-change="change"
            title="出生日期"
            @on-confirm="onConfirm">
        </datetime>
    </div>
</template>

<script>
import { createRequest } from '@/server-api/api.js'
import { Datetime } from 'vux'
export default {
    data(){
        return{
            birth:""
        }
    },

    methods:{
        change(){
            console.log('改变选值了');
        },
        onConfirm(){
            console.log('确定值了');
            console.log(this.$moment(this.birth).valueOf());
        }
    },

    components: {
        Datetime
    },
    async created(){
        let aaa = createRequest('get','aaa',{b:'bbb'});
        console.log(aaa);
    }
}
</script>

<style lang="scss" scoped lang='scss'>
#VuxPage{
    padding: 0.15rem;
    background: #fff;
}
</style>