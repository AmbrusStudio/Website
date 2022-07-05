<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { getNFTItemInfo } from '@/api'
import type { NFTItem } from '@/types'
import PageMain from '@components/layout/PageMain.vue'
import NFTBanner from '@components/mint/NFTBanner.vue'
import NFTDisclaimer from '@components/mint/NFTDisclaimer.vue'
import NFTSaleCard from '@components/mint/NFTSaleCard.vue'
import NFTIntroCard from '@components/mint/NFTIntroCard.vue'
import NFTPropertyCard from '@components/mint/NFTPropertyCard.vue'

const initData: NFTItem = {
  id: 0,
  bannerImages: [],
  disclaimer: { images: [], content: '' },
  introduction: [],
  properties: []
}
const route = useRoute()
const nftData = ref<NFTItem>(initData)

watchEffect(async () => {
  const nftId = String(route.params?.id)
  nftData.value = await getNFTItemInfo(nftId)
})
</script>

<template>
  <PageMain>
    <div class="flex flex-col md:gap-36px md:pt-60px pb-100px md:pb-114px">
      <div class="flex flex-col md:flex-row flex-nowrap relative">
        <NFTBanner :images="nftData.bannerImages" />
        <NFTSaleCard className="md:hidden" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 justify-between">
        <NFTDisclaimer :images="nftData.disclaimer.images" :content="nftData.disclaimer.content" />
        <div
          class="flex flex-col gap-24px md:gap-36px w-full md:w-540px p-24px md:p-0 md:ml-54px md:-mt-480px"
        >
          <NFTSaleCard className="hidden md:block" />
          <NFTIntroCard :intros="nftData.introduction" />
          <NFTPropertyCard :properties="nftData.properties" />
        </div>
      </div>
    </div>
  </PageMain>
</template>

<style scoped>
#header {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}
</style>
