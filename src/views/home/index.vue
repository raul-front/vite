<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <div class="home-page">
    <p>color</p>

    <el-button type="primary">BUTTON</el-button>

    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; height: 100px; margin-top: 20px;">
      <transition name="el-zoom-in-center">
        <div v-show="show" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/variables.scss";

.home-page {
  width: 100%;
  height: 100vh;

  // @include flex-center;

  .transition-box {
    box-sizing: border-box;
    width: 200px;
    height: 100px;
    padding: 40px 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    color: #fff;

    @include flex-center;

    // text-align: center;
    background-color: #409eff;
    border-radius: 4px;
  }
}
</style>
