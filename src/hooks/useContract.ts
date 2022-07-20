import { ethers } from 'ethers'
import { type Ref, type UnwrapRef, isRef, ref, watch } from 'vue'

import { type AmbrusStudioSaler, AmbrusStudioSaler__factory } from '@/contracts'

function getSalerContractAddress(): string {
  const address = import.meta.env.VITE_SALER_CONTRACT_ADDRESS
  if (!address) throw new TypeError('VITE_SALER_CONTRACT_ADDRESS not set')
  return ethers.utils.getAddress(address)
}

export function useSalerContract(
  ethereum: Ref<ethers.providers.Web3Provider | undefined>
): Ref<UnwrapRef<AmbrusStudioSaler | undefined>> {
  const _contract = ref<AmbrusStudioSaler | undefined>(undefined)

  function execute() {
    if (!ethereum.value || typeof ethereum.value.getSigner !== 'function') return
    const address = getSalerContractAddress()
    const signer = ethereum.value.getSigner()
    const contract = AmbrusStudioSaler__factory.connect(address, signer)
    _contract.value = contract
  }

  if (isRef(ethereum)) {
    watch(ethereum, execute, { immediate: true })
  } else {
    execute()
  }
  return _contract
}
