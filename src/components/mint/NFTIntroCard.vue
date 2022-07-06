<script setup lang="ts">
import type { NFTItemIntro } from '@/types'

interface Props {
  className?: string
  intros: NFTItemIntro[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-24px md:gap-36px p-12px md:p-36px bg-black/50" :class="[className]">
    <div v-for="(intro, index) in intros" :key="index" class="block">
      <h4 class="mt-12px md:mt-0 mb-12px uppercase text-rust font-bold text-14px leading-18px">
        {{ intro.title }}
      </h4>
      <p class="text-white font-normal text-14px leading-24px whitespace-pre">
        {{ intro.content }}
      </p>
    </div>
  </div>
</template>
