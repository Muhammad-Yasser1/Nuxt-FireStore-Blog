import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _65bc4150 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _db30a758 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _688f1f5c = () => interopDefault(import('..\\pages\\admin\\create\\index.vue' /* webpackChunkName: "pages_admin_create_index" */))
const _5f3444c2 = () => interopDefault(import('..\\pages\\admin\\_id\\index.vue' /* webpackChunkName: "pages_admin__id_index" */))
const _30999574 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */))
const _03fc4ef8 = () => interopDefault(import('..\\pages\\admin\\_id\\edit\\index.vue' /* webpackChunkName: "pages_admin__id_edit_index" */))
const _598e05ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _65bc4150,
      name: "admin"
    }, {
      path: "/posts",
      component: _db30a758,
      name: "posts"
    }, {
      path: "/admin/create",
      component: _688f1f5c,
      name: "admin-create"
    }, {
      path: "/admin/:id",
      component: _5f3444c2,
      name: "admin-id"
    }, {
      path: "/posts/:id",
      component: _30999574,
      name: "posts-id"
    }, {
      path: "/admin/:id/edit",
      component: _03fc4ef8,
      name: "admin-id-edit"
    }, {
      path: "/",
      component: _598e05ed,
      name: "index"
    }],

    fallback: false
  })
}
