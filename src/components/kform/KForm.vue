<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    provide() {
      return {
        form: this,
      }
    },
    props: {
      model: {
        type: Object,
        default: () => {},
        required: true,
      },
      rules: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      validate(cb) {
        // 调用所有拥有 prop 属性的子组件的 validate 事件
        const tasks = this.$children
          .filter(x => x.prop)
          .map(x => x.validate && x.validate())

        Promise.all(tasks)
          .then(() => cb && cb(true))
          .catch(() => cb && cb(false))
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
