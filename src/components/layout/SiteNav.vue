<script setup lang="ts">
import { ref } from 'vue'
import { getMainSiteLink } from '@/utils'
import IconArrowDown from '../icons/IconArrowDown.vue'
import ExternalLink from '../link/ExternalLink.vue'
import NavItem from './NavItem.vue'

interface Emits {
  (e: 'onGamesClick', open: boolean): void
}

const emit = defineEmits<Emits>()
const gamesOpen = ref(false)
const handleGamesNavClick = () => {
  const newState = !gamesOpen.value
  gamesOpen.value = newState
  emit('onGamesClick', newState)
}
</script>

<template>
  <nav class="flex flex-row flex-1 items-center gap-24px" title="Site Nav">
    <ExternalLink :to="getMainSiteLink('/')" titie="Home">
      <NavItem>Home</NavItem>
    </ExternalLink>
    <div :class="{ 'router-link-active': gamesOpen }">
      <NavItem @click.stop.prevent="handleGamesNavClick">
        E4C: Games
        <IconArrowDown class="ml-8px transition-all" :class="{ 'rotate-180': gamesOpen }" />
      </NavItem>
    </div>
    <ExternalLink :to="getMainSiteLink('/worldview')" title="World View">
      <NavItem>E4C: Verse</NavItem>
    </ExternalLink>
    <ExternalLink :to="getMainSiteLink('/aboutus')" title="About Us">
      <NavItem>About Us</NavItem>
    </ExternalLink>
  </nav>
</template>
