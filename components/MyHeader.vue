<template>
    <header>
        <div class="banxin content">
            <img :src="logo" alt="" height="50" />
            <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <el-menu-item :index="item.link" v-for="item in navarr" :key="item.id" :disabled="item.disable===1">
                    {{item.title}}</el-menu-item>
            </el-menu>
        </div>
    </header>
</template>

<script>
import { NavApi } from '~/request/api'
const logo = require("~/static/images/logo.png");
export default {
    data() {
        return {
            logo: logo,
            // active: "/",   //①
            navarr: []
        };
    },
    created() {
        NavApi().then(res => {
            if (res.errCode === 0) {
                this.navarr = res.data;
            }
        })
    },
    computed:{
        //②
        //当前路由的值
        active(){
            return this.$route.path;
        }
    },
    // ①
    // watch: {
    //     "$route.path": {
    //         handler(newVal, oldVal) {
    //             console.log(newVal, oldVal)
    //             if (newVal !== oldVal) {
    //                 this.active = newVal;
    //             }
    //         }
    //     }
    // },
    methods: {
        handleSelect() { }
    }
};
</script>

<style lang ="less" scoped>
header {
    background: #545c64;

    .content {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>