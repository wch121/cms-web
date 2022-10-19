<template>
    <div class="banner banxin">
        <el-carousel height="400px">
            <el-carousel-item v-for="item in banner" :key="item.id">
                <img :src="'http://localhost:9000/'+item.imgSrc" alt="" width="100%" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { BannerApi } from '~/request/api'
export default {
    data() {
        return {
            banner:[]
        }
    },
    //组件已经创建出来，再做请求-创建后
    //先请求数据，再渲染页面  组件一般不考虑渲染优先级
    async asyncData() {
        //使用await来实现同步运行(不是异步)  Promise
        let res = await BannerApi();
        return{
            banner:res.data
        }
    }

}
</script>

<style lang ="less" scoped>

</style>