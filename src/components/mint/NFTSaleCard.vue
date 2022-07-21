<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type { AmbrusStudioSaler } from '@/contracts'
import { useSalerContract, useSalerData, useWallet } from '@/hooks'
import type { NFTItemEdition, NFTItemInfo } from '@/types'
import { formatDatetime, isHistorical } from '@/utils'

import MarkdownView from '../markdown/MarkdownView.vue'
import type { NFTModalData } from '../modal/NFTMintModal.vue'
import NFTCurrency from '../nft/NFTCurrency.vue'
import NFTEditionRadio from './NFTEditionRadio.vue'

interface Props {
  className?: string
  info: NFTItemInfo
  editions: NFTItemEdition[]
}
interface Emits {
  (e: 'onMintComplete', data?: NFTModalData): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { ethereum, isConnected } = useWallet()

const salerContract = ref<AmbrusStudioSaler | undefined>(undefined)
const { price, amount, total, startTime } = useSalerData(salerContract)
const edition = ref<string>('')
const isMinting = ref(false)
const connected = computed(() => isConnected())
const selectedDate = computed(() => formatDatetime(startTime.value))
const isAvailable = computed(() => isHistorical(startTime.value))
const disabled = computed(() => !(isAvailable.value && total.value && connected.value))
const buttonText = computed(() => {
  if (!connected.value) return 'Connect Wallet'
  if (isAvailable.value) return 'Mint Now'
  return 'Coming Soon'
})
const handleMintClick = async () => {
  if (!salerContract.value) return
  try {
    isMinting.value = true
    const address = salerContract.value.address
    const saleStart = await salerContract.value.saleStart()
    console.log('saleStart', saleStart.toString())
    const modalData: NFTModalData = {
      images: 'http://localhost:3000/demo/images/nft-image-537.png',
      name: 'E4C Rangers #537',
      address,
      transaction: '0x85'
    }
    emit('onMintComplete', modalData)
  } catch (error) {
    console.error('Mint error', error)
  } finally {
    isMinting.value = false
  }
}

watch(
  edition,
  async (value: string) => {
    const selected = props.editions.find((e) => e.value === value)
    if (!selected) return
    const _salerContract = useSalerContract(ethereum, selected.contract)
    if (!_salerContract.value) return
    salerContract.value = _salerContract.value
  },
  { immediate: true }
)
</script>

<template>
  <div class="p-24px xl:p-36px bg-black/80 shadow-nft-sale backdrop-blur-20px" :class="[className]">
    <div class="flex flex-col gap-4px mb-24px xl:mb-36px">
      <h4 class="uppercase text-rust font-semibold text-14px leading-18px">{{ info.type }}</h4>
      <h3 class="text-white font-semibold text-20px leading-24px">{{ info.name }}</h3>
      <MarkdownView class="text-white font-medium text-14px leading-24px" :src="info.content" />
    </div>
    <form class="flex flex-col" action="#">
      <div class="flex flex-col gap-12px mb-24px xl:mb-36px" v-if="isAvailable">
        <NFTEditionRadio
          v-for="edi in editions"
          :key="`edition-radio-${edi.value}`"
          :id="`edition-radio-${edi.value}`"
          :name="edi.name"
          :value="edi.value"
          :contract="edi.contract"
          :style="edi.style"
          v-model="edition"
        />
      </div>
      <div class="flex flex-col gap-2px mb-12px text-grey-medium" v-if="!disabled">
        <p class="font-semibold text-12px leading-16px uppercase">PRICE</p>
        <NFTCurrency className="font-semibold text-32px leading-40px text-white" :price="price" />
        <div
          class="flex flex-row flex-nowrap justify-between items-center font-normal text-14px leading-18px"
        >
          <p>Available through {{ selectedDate }}</p>
          <p>{{ amount }} / {{ total }} Left</p>
        </div>
      </div>
      <button
        class="w-full py-16px xl:py-22px bg-rust text-white font-semibold text-16px xl:text-24px leading-20px xl:leading-28px text-center uppercase hover:bg-white hover:text-rust disabled:bg-grey-medium disabled:text-white disabled:hover:text-white"
        :disabled="disabled || isMinting"
        @click.stop.prevent="handleMintClick"
      >
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
