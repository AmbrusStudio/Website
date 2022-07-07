<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col">
    <h5 class="font-normal text-12px leading-16px text-grey-dark uppercase mb-4">{{ title }}</h5>
    <p class="font-bold text-16px leading-20px text-black-bg"><slot /></p>
  </div>
</template>
