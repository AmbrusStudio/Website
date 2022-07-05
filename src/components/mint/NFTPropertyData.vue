<script setup lang="ts">
import type { NFTPropertyData } from '@/types'

interface Props {
  data: NFTPropertyData
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-0 md:gap-4px">
    <h6
      class="uppercase text-#F0F0F0 font-normal text-10px md:text-12px leading-12px md:leading-16px"
    >
      {{ data.key }}
    </h6>
    <p class="text-white font-bold text-14px md:text-16px leading-17px md:leading-20px">
      {{ data.value }}
    </p>
  </div>
</template>
