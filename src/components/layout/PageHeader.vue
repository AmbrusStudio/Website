<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { stringSlice } from '@/utils'
import { useWallet } from '@/hooks'
import SiteNav from './SiteNav.vue'
import SocialNav from './SocialNav.vue'
import LogoNav from './LogoNav.vue'
import WalletButton from './WalletButton.vue'
import GamesNav from './GamesNav.vue'
import IconHeaderMenu from '../icons/IconHeaderMenu.vue'
import IconHeaderClose from '../icons/IconHeaderClose.vue'

const isMobile = ref(false)
const gamesNavOpen = ref(false)
const mobileMenuOpen = ref(false)
const { account, connect, reset, isConnected } = useWallet()
const connected = computed(() => isConnected())
const address = computed(() => {
  if (account?.value) return stringSlice(account.value, 4, 4)
  return ''
})
const mobileMenuClass = computed(() => {
  if (isMobile.value) {
    if (mobileMenuOpen.value) return 'flex'
    return 'hidden'
  } else return 'flex'
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
const handleMobileMenuToggle = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

watchEffect(() => {
  if (window && window.innerWidth < 1280) {
    isMobile.value = true
  }
})
</script>

<template>
  <header
    id="header"
    class="fixed top-0 z-30 w-100vw xl:w-full xl:h-auto bg-black/40 backdrop-blur-10px overflow-auto"
    :class="{ 'h-100vh': mobileMenuOpen }"
  >
    <div class="flex flex-col xl:flex-row xl:items-center h-full xl:h-100px xl:px-32px">
      <div
        class="flex flex-row items-center justify-between xl:justify-start h-68px xl:h-auto px-24px xl:p-0"
      >
        <LogoNav />
        <button class="xl:hidden text-rust" @click.stop.prevent="handleMobileMenuToggle">
          <IconHeaderMenu v-if="!mobileMenuOpen" />
          <IconHeaderClose v-else />
        </button>
      </div>
      <div class="flex-1 flex-col xl:flex-row xl:items-center" :class="mobileMenuClass">
        <SiteNav @onGamesClick="handleGamesNavClick" />
        <div
          class="flex flex-col xl:flex-row items-center gap-24px xl:gap-0 px-32px py-36px xl:p-0 bg-black-bg xl:bg-transparent"
        >
          <SocialNav className="px-26px" />
          <WalletButton
            :connected="connected"
            @onConnectClick="handleWalletConnect"
            @onDisonnectClick="handleWalletDisconnect"
          >
            {{ address }}
          </WalletButton>
        </div>
      </div>
    </div>
    <div class="hidden h-0 xl:block xl:h-auto">
      <GamesNav :open="gamesNavOpen" />
    </div>
  </header>
</template>
