<script setup lang="ts">
import type { NFTItemIntro } from '@/types'

import MarkdownView from '../markdown/MarkdownView.vue'

interface Props {
  className?: string
  intros: NFTItemIntro[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-24px xl:gap-36px p-12px xl:p-36px bg-black/50" :class="[className]">
    <div v-for="(intro, index) in intros" :key="index" class="block">
      <h4 class="mt-12px xl:mt-0 mb-12px uppercase text-rust font-bold text-14px leading-18px">
        {{ intro.title }}
      </h4>
      <MarkdownView
        class="intro-markdown-view text-white font-normal text-14px leading-24px"
        :src="intro.content"
      />
    </div>
  </div>
</template>

<style>
.intro-markdown-view p:not(:last-of-type) {
  @apply mb-20px;
}
.intro-markdown-view a {
  @apply text-rust underline;
}
.intro-markdown-view ul {
  @apply list-disc pl-20px;
}
</style>
