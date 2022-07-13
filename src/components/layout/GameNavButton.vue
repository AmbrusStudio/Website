<script setup lang="ts">
import { getMainSiteLink } from '@/utils'
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
}

defineProps<Props>()
</script>

<template>
  <ExternalLink :to="getMainSiteLink(to)">
    <p
      class="px-36px bg-black-bg rounded-8px font-bold text-20px leading-60px text-white text-center uppercase cursor-pointer"
    >
      <slot />
    </p>
  </ExternalLink>
</template>
