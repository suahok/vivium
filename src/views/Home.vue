<template>
  <div class="common-wrapper bg-emerald-500 bg-gray-100">
    <button class="w-24 h-10 text-white font-seri bg-emerald-600 rounded m-4" @click="$router.push('/system')">
      Button
    </button>
    <div class="svg-df w-40 h-34 rounded-md"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.image {
  width: 100%;
}

.icon-heart {
  width: 100px;
}

.svg-df {
  background: white url("@/assets/svg/Designer_Flatline.svg") no-repeat scroll center / contain content-box content-box;
}
</style>
