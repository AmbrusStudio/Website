<script setup lang="ts">
import { useWallet } from '@/hooks'
import SiteNav from './SiteNav.vue'
import SocialNav from './SocialNav.vue'
import LogoNav from './LogoNav.vue'
import WalletButton from './WalletButton.vue'
import { computed } from 'vue'
import { stringSlice } from '@/utils'

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
</script>

<template>
  <header id="header" class="flex flex-row items-center h-100px px-32px">
    <LogoNav />
    <SiteNav />
    <SocialNav className="px-26px" />
    <WalletButton
      :connected="connected"
      @onConnectClick="handleWalletConnect"
      @onDisonnectClick="handleWalletDisconnect"
    >
      {{ address }}
    </WalletButton>
  </header>
</template>
