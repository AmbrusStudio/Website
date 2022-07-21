import { ethers } from 'ethers'
import { type Ref, type UnwrapRef, isRef, ref, watch } from 'vue'

import type { AmbrusStudioSaler } from '@/contracts'

type SalerData = {
  price: Ref<string>
  amount: Ref<number>
  total: Ref<number>
  startTime: Ref<number>
}

export function useSalerData(contract: Ref<UnwrapRef<AmbrusStudioSaler | undefined>>): SalerData {
  const price = ref<string>('0')
  const amount = ref<number>(0)
  const total = ref<number>(0)
  const startTime = ref<number>(0)

  async function getContractData() {
    if (!contract.value) return
    const _price = await contract.value.price()
    const _total = await contract.value.count()
    const _soldCount = await contract.value.soldCount()
    const _startTime = await contract.value.saleStart()

    price.value = ethers.utils.formatEther(_price)
    amount.value = _total.sub(_soldCount).toNumber()
    total.value = _total.toNumber()
    startTime.value = _startTime.toNumber()
  }

  if (isRef(contract)) {
    watch(contract, getContractData, { immediate: true })
  } else {
    getContractData()
  }

  return { price, amount, total, startTime }
}
