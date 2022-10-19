<template>
    <div class="banxin">
        <el-breadcrumb separator="/" style="padding: 20px 0;">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" style="width:100%">
            <el-table-column prop="author" label="作者" width="200">
            </el-table-column>
            <el-table-column prop="title" label="文章标题" width="600">
                <template slot-scope="scope">
                    <nuxt-link :to="`/article?id=${scope.row.id}`">{{ scope.row.title }}</nuxt-link>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="日期">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { ArticleListApi } from '~/request/api'
import moment from 'moment'
export default {
    data() {
        return {
            tableData: [],
        };
    },
    async asyncData() {
        let res = await ArticleListApi()
        if (res.errCode === 0) {
            res.data.forEach(item => {
                item.date = moment(item.date).startOf('day').fromNow();
            })
            return { tableData: res.data }
        }
    }
}
</script>

<style lang ="less" scoped>

</style>