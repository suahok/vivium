<template>
  <div class="wrapper">
    <n-button strong color="#6b59d3" @click="() => void loginStore.login()">Login</n-button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/login"

const loginStore = useLoginStore()
</script>

<style scoped>
.wrapper {
  background-color: #7b68ee;
}
</style>
