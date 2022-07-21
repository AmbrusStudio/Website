<script setup lang="ts">
import { computed } from 'vue'

import { renderMarkdown } from '@/utils'

interface Props {
  src: string
}
const props = defineProps<Props>()
const mdHtml = computed(() => renderMarkdown(props.src))
</script>

<template>
  <div class="markdown-view" v-html="mdHtml"></div>
</template>

<style>
.markdown-view * {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}
</style>
