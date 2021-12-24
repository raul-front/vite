<script setup="setup">
import { ref } from 'vue'
import useCounterStore from '@/store/useCounterStore'
import useUserMoney from '@/store/useUserMoney'

const counter = useCounterStore()
const userMoney = useUserMoney()
const n = ref(1)
</script>

<template>
  <hr>
  <div>
    <div>
        B:
        {{ counter.number }}
    </div>
    <div>
        double: {{ counter.doubleNumber }}
    </div>
    <div>
        <input v-model.number="n"/>
        value: {{ counter.addAnyNumber(n) }}
    </div>
    <div>
        user money: {{ userMoney.total }}
    </div>
  </div>
</template>
