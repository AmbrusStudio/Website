<script setup lang="ts">
import { getMainSiteLink } from '@/utils'
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
  img: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <ExternalLink :to="getMainSiteLink(to)" :title="title">
    <div class="bg-white border-2px border-grey-medium/20 rounded-4px cursor-pointer">
      <img class="w-400px select-none" :src="img" :alt="title + ' Image'" loading="lazy" />
    </div>
  </ExternalLink>
</template>
