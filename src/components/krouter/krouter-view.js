export default {
  render(h) {
    let comp = null

    const {routeMap, currentHash} = this.$router
    comp = routeMap[currentHash] ? routeMap[currentHash].component : null

    return h(comp)
  },
}
