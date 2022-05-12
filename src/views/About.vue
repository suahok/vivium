<template>
  <div class="wrapper">
    <div class="about">
      <n-space size="large">
        <n-button color="#fa8072" size="large" @click="$router.push('/')">ToHome</n-button>
        <n-button color="#fa8072" size="large" @click="loginStore.logout">Logout</n-button>
      </n-space>
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
  background-color: #fa8072;
}

.about {
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
