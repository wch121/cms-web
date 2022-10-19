<template>
    <div class="article-page">
        <el-breadcrumb separator="/" style="padding: 20px 0;">
            <el-breadcrumb-item :to="{ path: '/list' }">文章列表</el-breadcrumb-item>
            <el-breadcrumb-item>文章内容</el-breadcrumb-item>
        </el-breadcrumb>
        <h2>{{title}}</h2>
        <h4>{{subTitle}}</h4>
        <section>
            <span>作者：{{author}}</span>
            <span>日期：{{date}}</span>
        </section>
        <hr>
        <div class="content" v-html="content"></div>
    </div>
</template>

<script>
import { ArticleIdApi } from '~/request/api'
import moment from 'moment'
export default {
    data() {
        return {
            title: "",
            subTitle: "",
            content: "",
            author: "",
            date: ""
        }
    },
    async asyncData({ query }) {
        let res = await ArticleIdApi({ id: query.id })
        if (res.errCode === 0) {
            res.data.date = moment(res.data.date).format('L');
        }
        return { ...res.data }
    }
}
</script>

<style lang ="less" scoped>
.article-page {
    h2 {
        font-weight: bold;
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    /deep/.content {
        p {
            text-indent: 2em;
        }

        img {
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
</style>