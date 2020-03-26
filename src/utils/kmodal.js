import Vue from 'vue'

export function create(component, props) {
  // 创建一个 Vue 新实例
  const vm = new Vue({
    render(h) {
      // render 函数将传入的组件配置实例 component 转化为虚拟 DOM
      return h(component, props)
    }
  }).$mounted() // 执行挂载函数，未指定挂载目标

  // 将生成的 DOM 追加至 body
  document.body.appendChild(vm.$el)

  // 给组件实例添加销毁方法
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}

export function extend(component, props) {
  const Vm = Vue.extend(component)
  const vm = new Vm({propsData: props})

  document.body.appendChild(vm.$el)

  vm.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return vm
}
