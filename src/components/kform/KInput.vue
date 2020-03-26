<template>
  <div>
    <input :value="value" @input="handleInputChange" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  mixins: [emitter],
  methods: {
    handleInputChange(e) {
      this.$emit('input', e.target.value)

      // 触发 KFormItem 组件上的 validate 事件进行校验
      const componentName = 'KFormItem'
      const eventName = 'validate'
      this.dispatch(componentName, eventName)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
