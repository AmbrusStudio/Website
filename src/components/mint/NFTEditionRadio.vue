<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed, reactive } from 'vue'

import type { NFTItemEditionStyle } from '@/types'

import NFTCurrency from '../nft/NFTCurrency.vue'

interface Props {
  id: string
  amount: number
  price: number
  /** Radio 的选项名 */
  name: string
  /** Radio 的选项值 */
  value: string
  style: NFTItemEditionStyle
  modelValue: string
}
interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const radioModel = useVModel(props, 'modelValue', emits)
const price = computed(() => String(props.price))
const disabled = computed(() => !props.amount)
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
      <NFTCurrency className="text-white font-medium" :price="price" v-else />
    </div>
  </label>
</template>

<style scoped>
input[type='radio']:checked + div {
  @apply border-white;
}
</style>
