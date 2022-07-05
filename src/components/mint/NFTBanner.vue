<script setup lang="ts">
import { getImageSet } from '@/utils'
import { computed } from 'vue'

interface Props {
  images: string | string[]
}

const props = defineProps<Props>()
const image = computed(() => {
  if (Array.isArray(props.images)) return props.images[0]
  return props.images
})
const imageSet = computed(() => {
  if (Array.isArray(props.images)) return getImageSet(props.images)
  return undefined
})
</script>

<template>
  <div class="flex flex-row flex-nowarp items-center">
    <img
      class="w-full h-auto md:w-auto md:h-480px select-none"
      :src="image"
      alt="NFT Item Banner"
      :srcset="imageSet"
      loading="lazy"
    />
  </div>
</template>
