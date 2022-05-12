<template>
  <div class="wrapper">
    <div class="home">
      <n-button color="#20b2aa" size="large" @click="$router.push('/about')">ToAbout</n-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #20b2aa;
}

.home {
  width: 40%;
  height: 50%;
  margin: auto;
  display: inherit;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: white;
}
</style>
