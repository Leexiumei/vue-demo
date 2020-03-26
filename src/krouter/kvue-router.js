import Link from '@/components/krouter/krouter-link'
import View from '@/components/krouter/krouter-view'

let Vue

class VueRouter {
  constructor(options) {
    this.$options = options

    // path 和 route 映射
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })

    // 定义响应式属性 currentHash
    Vue.util.defineReactive(this, 'currentHash', '/')

    const hash = window.location.hash.slice(1)
    Vue.util.defineReactive(this, 'currentHash', hash)

    // 监听 hashchange 事件
    window.addEventListener('hashchange', this.onHashChange)
  }

  onHashChange = () => {
    this.currentHash = window.location.hash.slice(1)
  }
}

// 插件，注册 install
// eslint-disable-next-line func-names
VueRouter.install = function(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      // main.js 中初始化根组件时传入参数 router，因此，只有根组件拥有 router
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 注册全局组件 router-view 和 router-link
  Vue.component('router-view', View)
  Vue.component('router-link', Link)
}

export default VueRouter
