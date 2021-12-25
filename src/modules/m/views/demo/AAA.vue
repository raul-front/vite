<script setup="setup">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
const addOne = () => {
  counterStore.$patch({
    number: counterStore.number + 1,
  })
}
const { addMany, addAsyncMany, addAsyncWithAwait } = counterStore
</script>

<template>
  <div>
    A:
    {{ counterStore.number }}

    <button @click="addOne">+1</button>
    <button @click="addMany">add many</button>
    <button @click="addAsyncMany">add async many</button>
    <button @click="addAsyncWithAwait">add await many</button>
  </div>
</template>
