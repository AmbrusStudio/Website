import { ethers } from 'ethers'
import { type Ref, type UnwrapRef, isRef, ref, watch } from 'vue'

import type { AmbrusStudioSaler, ERC721 } from '@/contracts'
import { AmbrusStudioSaler__factory, ERC721__factory } from '@/contracts'

export function useERC721Contract(
  ethereum: Ref<ethers.providers.Web3Provider | undefined>,
  address: string
): Ref<UnwrapRef<ERC721 | undefined>> {
  const _contract = ref<ERC721 | undefined>(undefined)

  function execute() {
    if (!ethereum.value || typeof ethereum.value.getSigner !== 'function') return
    if (!address) return
    const _address = ethers.utils.getAddress(address)
    const signer = ethereum.value.getSigner()
    const contract = ERC721__factory.connect(_address, signer)
    _contract.value = contract
  }

  if (isRef(ethereum)) {
    watch(ethereum, execute, { immediate: true })
  } else {
    execute()
  }
  return _contract
}

export function useSalerContract(
  ethereum: Ref<ethers.providers.Web3Provider | undefined>,
  address: string
): Ref<UnwrapRef<AmbrusStudioSaler | undefined>> {
  const _contract = ref<AmbrusStudioSaler | undefined>(undefined)

  function execute() {
    if (!ethereum.value || typeof ethereum.value.getSigner !== 'function') return
    if (!address) return
    const _address = ethers.utils.getAddress(address)
    const signer = ethereum.value.getSigner()
    const contract = AmbrusStudioSaler__factory.connect(_address, signer)
    _contract.value = contract
  }

  if (isRef(ethereum)) {
    watch(ethereum, execute, { immediate: true })
  } else {
    execute()
  }
  return _contract
}
