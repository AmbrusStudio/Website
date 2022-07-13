<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { getHeaderLinks, type HeaderLink } from '@/api'
import SocialNavItem from './SocialNavItem.vue'

interface Props {
  className?: string
}

defineProps<Props>()
const headers = ref<HeaderLink[]>([])

watchEffect(async () => {
  headers.value = await getHeaderLinks()
})
</script>

<template>
  <nav
    class="flex flex-row flex-nowrap items-center gap-24px text-white"
    :class="[className]"
    title="Social Nav"
  >
    <SocialNavItem
      v-for="header in headers"
      :to="header.url"
      :img="header.img"
      :key="header.url"
      title="Social Link"
    />
  </nav>
</template>
