<script setup lang="ts">
interface Props {
  className?: string
  price: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-row flex-nowrap items-center" :class="[className]">
    <span class="mr-6px">&#926;</span>
    {{ price }}
  </div>
</template>
