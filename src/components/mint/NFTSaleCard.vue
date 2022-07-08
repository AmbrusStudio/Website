<script setup lang="ts">
import type { NFTItemEdition } from '@/types'
import { computed, ref } from 'vue'
import NFTEditionRadio from './NFTEditionRadio.vue'
import NFTCurrency from '../nft/NFTCurrency.vue'
import { formatDatetime, isHistorical } from '@/utils'
import type { NFTModalData } from '../modal/NFTMintModal.vue'
import { useWallet } from '@/hooks'

interface Props {
  className?: string
  time: number
  editions: NFTItemEdition[]
}
interface Emits {
  (e: 'onMintComplete', data?: NFTModalData): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { isConnected } = useWallet()
const connected = computed(() => isConnected())
const edition = ref<string>('')
const selectedEdition = computed(() => props.editions.find((e) => e.value === edition.value))
const selectedPrice = computed(() => selectedEdition.value?.price?.toString() || '0.0')
const selectedDate = computed(() => formatDatetime(props.time))
const isAvailable = computed(() => isHistorical(props.time))
const disabled = computed(() => !(isAvailable.value && selectedEdition.value && connected.value))
const buttonText = computed(() => {
  if (!connected.value) return 'Connect Wallet'
  if (isAvailable.value) return 'Mint Now'
  return 'Coming Soon'
})
const handleMintClick = () => {
  const modalData: NFTModalData = {
    images: 'http://localhost:3000/demo/images/nft-image-537.png',
    name: 'E4C Rangers #537',
    address: '0x85',
    transaction: '0x85'
  }
  emit('onMintComplete', modalData)
}
</script>

<template>
  <div class="p-24px xl:p-36px bg-black/80 shadow-nft-sale backdrop-blur-20px" :class="[className]">
    <div class="flex flex-col gap-4px mb-24px xl:mb-36px">
      <h4 class="uppercase text-rust font-semibold text-14px leading-18px">E4C Fallen Arena</h4>
      <h3 class="text-white font-semibold text-20px leading-24px">Thorn: Bumble Fighter</h3>
      <p class="text-white font-normal text-14px leading-24px">
        Pearce's fixed-wing X6 provides a surprising amount of comfortable living space aboard a
        compact and highly agile fighter patrol ship. A supremely capable combat vessel with an
        extended atmoglass canopy provides a conspicuous piloting advantage as well as a way
      </p>
    </div>
    <form class="flex flex-col" action="#">
      <div class="flex flex-col gap-12px mb-24px xl:mb-36px" v-if="isAvailable">
        <NFTEditionRadio
          v-for="(edi, index) in editions"
          :key="`edition-radio-${index}`"
          :id="`edition-radio-${index}`"
          :amount="edi.amount"
          :price="edi.price"
          :name="edi.name"
          :value="edi.value"
          :style="edi.style"
          v-model="edition"
        />
      </div>
      <div class="flex flex-col gap-2px mb-12px text-grey-medium" v-if="!disabled">
        <p class="font-semibold text-12px leading-16px uppercase">PRICE</p>
        <NFTCurrency
          className="font-semibold text-32px leading-40px text-white"
          :price="selectedPrice"
        />
        <div
          class="flex flex-row flex-nowrap justify-between items-center font-normal text-14px leading-18px"
        >
          <p>Available through {{ selectedDate }}</p>
          <p>{{ selectedEdition?.amount || 0 }} / {{ selectedEdition?.total || 0 }} Left</p>
        </div>
      </div>
      <button
        class="w-full py-16px xl:py-22px bg-rust text-white font-semibold text-16px xl:text-24px leading-20px xl:leading-28px text-center uppercase hover:bg-white hover:text-rust disabled:bg-grey-medium disabled:text-white disabled:hover:text-white"
        :disabled="disabled"
        @click.stop.prevent="handleMintClick"
      >
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
