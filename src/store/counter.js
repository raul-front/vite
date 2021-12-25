import { defineStore } from 'pinia'

const useCounterStore = defineStore({
  id: 'count',
  state: () => ({
    number: 0,
  }),
  getters: {
    doubleNumber (state) {
      return state.number * 2
    },
    addAnyNumber (state) {
      return (n) => state.number + n
    },
  },
  actions: {
    addMany () {
      const random = Math.round(Math.random() * 1000)
      this.$state.number += random
    },
    addAsyncMany () {
      const random = Math.round(Math.random() * 1000)
      setTimeout(() => {
        this.$state.number += random
      }, 1000)
    },
    async addAsyncWithAwait () {
      try {
        const n = await anyAwait()
        this.$state.number += n
      } catch (e) {
        console.log('error', e)
      }
    },
  },
})
const anyAwait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = Math.random()
      if (a < 0.5) {
        resolve(30)
      } else {
        reject(new Error('error!!!!!!!!!!!!!!!!!'))
      }
    }, 1000)
  })
}

// 这里做一个数据持久化处理
export const initCounter = () => {
// localstorage
  const instance = useCounterStore()
  // listen hooks
  instance.$subscribe((mutation, state) => {
    // save
    localStorage.setItem(instance.$id, JSON.stringify(state))
  })
  // recover
  const re = localStorage.getItem(instance.$id)
  if (re) {
    instance.$patch({
      ...JSON.parse(re),
    })
  }
}

export default useCounterStore
