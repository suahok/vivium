<template>
  <Suspense>
    <template #default>
      <router-view #default="{ Component, route }">
        <transition :name="transitionName">
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
    <template #fallback>
      <fading-circle />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const transitionName = ref("slide-left")

watch(
  () => router.currentRoute.value,
  function (to, from) {
    if (splitPath(to.path) >= splitPath(from.path)) transitionName.value = "slide-left"
    else transitionName.value = "slide-right"
  },
  { flush: "post" }
)

function splitPath(path: string) {
  return path.split("/").filter(item => item).length || 1
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  background-color: #f4f4f4;
}

.common-wrapper {
  inline-size: 100%;
  block-size: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-enter-to,
.slide-right-leave-from {
  position: absolute;
  right: 0;
}

.slide-left-enter-from,
.slide-right-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-to,
.slide-right-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-from,
.slide-right-enter-to {
  position: absolute;
  left: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  border-radius: 30px;
  transform: scale(0.8);
}
</style>
