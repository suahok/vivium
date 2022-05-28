<template>
  <div class="wrapper">
    <n-scrollbar>
      <n-space vertical>
        <n-button strong color="#199993" @click="$router.push('/about')">Button</n-button>
        <img class="image" src="@/images/133-1920x1080.jpg" alt="133-1920x1080.jpg" />
        <img class="image" src="@/images/406-1920x1080.webp" alt="406-1920x1080.webp" />
      </n-space>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  background-color: #f0f8ff;
}

.image {
  width: 100%;
}

.icon-heart {
  width: 100px;
}
</style>
