<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMsg">{{errorMsg}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  name: 'KFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      errorMsg: '',
    }
  },
  mounted() {
    this.$on('validate', () => this.validate())
  },
  methods: {
    validate() {
      // 获取当前 prop 校验规则 rules 和值 value
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]

      const descriptor = {[this.prop]: rules}
      const schema = new Schema(descriptor)

      // 使用 async-validator 校验，并返回 promise
      return new Promise((resolve, reject) => {
        schema.validate({[this.prop]: value}, error => {
          console.log(error)
          if (Array.isArray(error) && error.length) {
            this.errorMsg = error[0].message
            reject()
          } else {
            this.errorMsg = ''
            resolve()
          }
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
