<template>
  <div class="common-wrapper bg-purple-500 p-4">
    <button class="w-24 h-10 text-white font-seri bg-purple-600 rounded" @click="loginStore.login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/login"

const loginStore = useLoginStore()
</script>

<style scoped></style>
