<template>
  <div class="notfound-page">
    404
    <el-button type="" @click="goHome">goHome</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push({ name: 'Home' })
}
</script>

<style lang="scss">
.notfound-page{
}
</style>
