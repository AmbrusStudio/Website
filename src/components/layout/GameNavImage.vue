<script setup lang="ts">
import { getMainSiteLink } from '@/utils'
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
  img: string
}

defineProps<Props>()
</script>

<template>
  <ExternalLink :to="getMainSiteLink(to)">
    <div class="bg-white border-2px border-grey-medium/20 rounded-4px cursor-pointer">
      <img class="w-400px select-none" :src="img" alt="Game Image" loading="lazy" />
    </div>
  </ExternalLink>
</template>
