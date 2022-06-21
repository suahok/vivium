<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-white">
    <div class="svg-404-page w-120 h-100"></div>
    <p class="text-gray-600 font-mono">404 Page Not Found</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.svg-404-page {
  background: transparent url("@/assets/svg/404 Page Not Found.svg") no-repeat scroll center / contain content-box
    content-box;
}
</style>
