import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02d918f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _48a84d92 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _411dd494 = () => interopDefault(import('..\\pages\\index\\article.vue' /* webpackChunkName: "pages/index/article" */))
const _5ca39dce = () => interopDefault(import('..\\pages\\index\\call.vue' /* webpackChunkName: "pages/index/call" */))
const _7188e01e = () => interopDefault(import('..\\pages\\index\\info.vue' /* webpackChunkName: "pages/index/info" */))
const _91ba97e4 = () => interopDefault(import('..\\pages\\index\\list.vue' /* webpackChunkName: "pages/index/list" */))

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
    component: _02d918f0,
    children: [{
      path: "",
      component: _48a84d92,
      name: "index"
    }, {
      path: "article",
      component: _411dd494,
      name: "index-article"
    }, {
      path: "call",
      component: _5ca39dce,
      name: "index-call"
    }, {
      path: "info",
      component: _7188e01e,
      name: "index-info"
    }, {
      path: "list",
      component: _91ba97e4,
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
