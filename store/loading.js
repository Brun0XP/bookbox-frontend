export const state = () => ({
  overlay: false
})

export const mutations = {
  disable(state) {
      state.overlay = false
  },
  enable(state) {
      state.overlay = true
  }
}