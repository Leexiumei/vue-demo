export default {
  props: {
    to: {
      type: String,
      default: '',
      required: true,
    },
  },
  render(h) {
    return h(
      'a',
      {
        attrs: {
          href: `#${this.to}`,
        },
      },
      [
        this.$slots.default,
      ]
    )
  },

  // jsx
  // render() {
  //   return (
  //   <a href={`#${this.to}`}>{this.$slots.default}</a>
  //   )
  // },
}
