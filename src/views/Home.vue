<template>
  <div class="common-wrapper bg-cyan-500">
    <button class="w-24 h-10 text-white font-seri bg-cyan-600 rounded" @click="$router.push('/system')">Button</button>
    <button class="w-24 h-10 text-white font-seri bg-cyan-600 rounded ml-4" @click="onAnimate">Animate</button>
    <div
      v-show="isAnimated"
      class="svg-box w-40 h-34 mt-4 rounded-md animate-zoom-in animate-duration-300 animate-ease-in-out"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isAnimated = ref(false)

function onAnimate() {
  isAnimated.value = !isAnimated.value
}
</script>

<style scoped>
.svg-box {
  background: rgba(8, 145, 178, 0.6) url("@/assets/svg/Designer-Flatline.svg") no-repeat scroll center / contain
    content-box content-box;
}
</style>
