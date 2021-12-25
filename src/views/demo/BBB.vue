<script setup="setup">
import { ref } from 'vue'
import useCounterStore from '@/store/counter'
import useUserMoney from '@/store/userMoney'

const counterStore = useCounterStore()
const userMoneyStore = useUserMoney()
const n = ref(1)
</script>

<template>
  <hr>
  <div>
    <div>
        B:
        {{ counterStore.number }}
    </div>
    <div>
        double: {{ counterStore.doubleNumber }}
    </div>
    <div>
        <input v-model.number="n"/>
        value: {{ counterStore.addAnyNumber(n) }}
    </div>
    <div>
        user money: {{ userMoneyStore.total }}
    </div>
  </div>
</template>
