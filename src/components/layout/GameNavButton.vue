<script setup lang="ts">
import { getMainSiteLink } from '@/utils'
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
  name: string
}

defineProps<Props>()
</script>

<template>
  <ExternalLink :to="getMainSiteLink(to)" :title="name">
    <p
      class="px-24px xl:px-36px bg-black-bg rounded-8px font-bold text-16px xl:text-20px leading-32px xl:leading-60px text-white text-center uppercase cursor-pointer"
    >
      {{ name }}
    </p>
  </ExternalLink>
</template>
