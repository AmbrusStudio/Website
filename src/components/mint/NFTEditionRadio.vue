<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ethers } from 'ethers'
import { computed, reactive, watch } from 'vue'

import { useERC721Contract, useSalerContract, useWallet } from '@/hooks'
import type { NFTItemEditionStyle } from '@/types'

import NFTCurrency from '../nft/NFTCurrency.vue'

interface Props {
  id: string
  /** Radio 的选项名 */
  name: string
  /** Radio 的选项值 */
  value: string
  /** 版本对应的 AmbrusStudioSaler 合约地址 */
  contract: string
  style: NFTItemEditionStyle
  modelValue: string
}
interface Emits {
  (event: 'update:modelValue', value: string): void
}
interface Data {
  price: string
  amount: number
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const radioModel = useVModel(props, 'modelValue', emits)
const { ethereum } = useWallet()
const data = reactive<Data>({ price: '0', amount: 0 })
const disabled = computed(() => !data.amount)
const selected = computed(() => props.value === radioModel.value)
const labelClass = reactive({
  'cursor-not-allowed': disabled,
  'border-1px': !disabled.value,
  'border-transparent': !disabled.value
})
const labelStyle = computed(() => ({
  background: props.style.background,
  boxShadow: selected.value ? props.style.boxShadow : undefined
}))

watch(
  ethereum,
  async () => {
    if (!props.contract) return
    const salerContract = useSalerContract(ethereum, props.contract)
    if (!salerContract.value) return
    const price = await salerContract.value.price()
    data.price = ethers.utils.formatEther(price)

    const nftAddress = await salerContract.value.nft()
    const nftContract = useERC721Contract(ethereum, nftAddress)
    if (!nftContract.value) return
    const amount = await nftContract.value.balanceOf(salerContract.value.address)
    data.amount = amount.toNumber()
  },
  { immediate: true }
)
</script>

<template>
  <label class="relative text-16px leading-20px cursor-pointer" :for="id">
    <input
      class="-z-1 absolute inset-0 opacity-0"
      type="radio"
      name="edition"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="radioModel"
    />
    <div
      class="flex flex-row flex-nowrap justify-between items-center px-24px py-20px"
      :class="labelClass"
      :style="labelStyle"
    >
      <span class="text-white font-semibold">{{ name }}</span>
      <span class="text-grey-medium font-medium" v-if="disabled">Sold Out</span>
      <NFTCurrency className="text-white font-medium" :price="data.price" v-else />
    </div>
  </label>
</template>

<style scoped>
input[type='radio']:checked + div {
  @apply border-white;
}
</style>
