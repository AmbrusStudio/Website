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
  availableTimestamp: 0,
  bannerImages: [],
  disclaimer: { images: [], content: '' },
  editions: [],
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
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-y-36px md:pt-60px pb-100px md:pb-114px">
      <NFTBanner className="md:col-span-2" :images="nftData.bannerImages" />
      <NFTDisclaimer
        className="hidden md:flex"
        :images="nftData.disclaimer.images"
        :content="nftData.disclaimer.content"
      />
      <div class="grid grid-cols-1 md:gap-y-36px md:w-540px md:ml-auto md:mr-36px md:-mt-480px">
        <NFTSaleCard :editions="nftData.editions" :time="nftData.availableTimestamp" />
        <NFTDisclaimer
          className="md:hidden"
          :images="nftData.disclaimer.images"
          :content="nftData.disclaimer.content"
        />
        <NFTIntroCard class="m-24px md:m-0" :intros="nftData.introduction" />
        <NFTPropertyCard class="mx-24px md:m-0" :properties="nftData.properties" />
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
