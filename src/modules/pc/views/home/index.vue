<script setup>
</script>

<template>
  <div class="home-page">
    pc-home-page
    <!-- <button @click="click">click</button> -->
    <router-link :to="{name: 'Demo_Pinia'}">link</router-link>
    <el-button class="btn" type="primary">Buttom</el-button>
    <a href="/m.html">aaaa</a>
  </div>
</template>

<style lang="scss">
.home-page {
  a {
    width: 100px;
    font-size: $font-size-1;
    color: var(--el-color-primary);
  }
}
</style>
