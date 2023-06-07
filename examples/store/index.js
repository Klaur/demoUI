import { defineStore } from 'pinia'
export const mainStore = defineStore('use', {
  // state 类似组件的data选项，函数形式返回对象
  state: () => {
    return {
      msg: 'hello world!',
      counter: 0
    }
  },
  getters: {},
  actions: {}
})
