<script setup lang="ts">
import { useWallet } from '@/hooks'
import SiteNav from './SiteNav.vue'
import SocialNav from './SocialNav.vue'
import LogoNav from './LogoNav.vue'
import WalletButton from './WalletButton.vue'
import { computed, ref } from 'vue'
import { stringSlice } from '@/utils'
import GamesNav from './GamesNav.vue'

const gamesNavOpen = ref(false)
const { account, connect, reset, isConnected } = useWallet()
const connected = computed(() => isConnected())
const address = computed(() => {
  if (account?.value) return stringSlice(account.value, 4, 4)
  return ''
})
const handleWalletConnect = () => {
  connect()
}
const handleWalletDisconnect = () => {
  reset()
}
const handleGamesNavClick = (open: boolean) => {
  gamesNavOpen.value = open
}
</script>

<template>
  <header
    id="header"
    class="fixed top-0 z-30 flex flex-row items-center h-100px px-32px w-full bg-black/50 backdrop-blur-10px"
  >
    <LogoNav />
    <SiteNav @onGamesClick="handleGamesNavClick" />
    <SocialNav className="px-26px" />
    <WalletButton
      :connected="connected"
      @onConnectClick="handleWalletConnect"
      @onDisonnectClick="handleWalletDisconnect"
    >
      {{ address }}
    </WalletButton>
    <GamesNav :open="gamesNavOpen" />
  </header>
</template>
