<template>
  <div class="common-wrapper bg-emerald-500 bg-gray-100">
    <button class="w-24 h-10 text-white font-seri bg-emerald-600 rounded m-4" @click="$router.push('/system')">
      Button
    </button>
    <img class="image" src="@/images/133-1920x1080.jpg" alt="133-1920x1080.jpg" />
    <img class="image" src="@/images/406-1920x1080.webp" alt="406-1920x1080.webp" />
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
</style>
