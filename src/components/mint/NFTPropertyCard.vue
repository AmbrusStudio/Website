<script setup lang="ts">
import type { NFTItemProperty } from '@/types'
import NFTPropertyGroup from './NFTPropertyGroup.vue'

interface Props {
  properties: NFTItemProperty[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-36px md:gap-48px p-12px md:p-36px bg-black/50">
    <NFTPropertyGroup
      v-for="(data, index) in properties"
      :mode="data.mode"
      :title="data.title"
      :data="data.data"
      :key="`prop-${index}`"
    />
  </div>
</template>
