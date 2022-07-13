<script setup lang="ts">
interface Props {
  className?: string
}

defineProps<Props>()
</script>

<template>
  <div class="font-medium text-grey-medium text-14px leading-18px uppercase" :class="[className]">
    <slot />
  </div>
</template>
