import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLikes: 0
    }
  },
  mutations: {
    increment(state) {
      state.totalLikes++
    }
  }
})