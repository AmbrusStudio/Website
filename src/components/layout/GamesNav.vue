<script setup lang="ts">
interface Props {
  open: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="hidden absolute top-100px left-0 w-full px-88px py-48px bg-black/50 backdrop-blur-10px"
    :class="{ '!block': open }"
  >
    <div class="flex flex-col"></div>
  </div>
</template>
