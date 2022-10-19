import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _388624e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3068d813 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _4d8df812 = () => interopDefault(import('..\\pages\\index\\article.vue' /* webpackChunkName: "pages/index/article" */))
const _4b573f2d = () => interopDefault(import('..\\pages\\index\\call.vue' /* webpackChunkName: "pages/index/call" */))
const _603c817d = () => interopDefault(import('..\\pages\\index\\info.vue' /* webpackChunkName: "pages/index/info" */))
const _b4535526 = () => interopDefault(import('..\\pages\\index\\list.vue' /* webpackChunkName: "pages/index/list" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _388624e2,
    children: [{
      path: "",
      component: _3068d813,
      name: "index"
    }, {
      path: "article",
      component: _4d8df812,
      name: "index-article"
    }, {
      path: "call",
      component: _4b573f2d,
      name: "index-call"
    }, {
      path: "info",
      component: _603c817d,
      name: "index-info"
    }, {
      path: "list",
      component: _b4535526,
      name: "index-list"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
