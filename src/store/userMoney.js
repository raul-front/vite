import { defineStore } from 'pinia'
import useCounterStore from './counter'

const useUserMoney = defineStore({
  id: 'user',
  state: () => ({
    money: 1,
  }),
  getters: {
    total (state) {
      const counter = useCounterStore()
      return counter.number * state.money
    },
  },

})

export default useUserMoney
