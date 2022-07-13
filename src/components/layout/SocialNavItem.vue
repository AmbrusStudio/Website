<script setup lang="ts">
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
  img: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <ExternalLink :to="to" :title="title" :blank="true">
    <div class="bg-transparent cursor-pointer">
      <img class="w-24px h-24px select-none" :src="img" :alt="title + ' Icon'" loading="lazy" />
    </div>
  </ExternalLink>
</template>
