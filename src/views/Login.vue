<template>
  <div class="wrapper login-wrapper">
    <div class="login">
      <n-button color="#7b68ee" size="large" @click="loginStore.login">Login</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/login"

const loginStore = useLoginStore()
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #7b68ee;
}

.login-wrapper {
  position: absolute;
}

.login {
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
