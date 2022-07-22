import { ethers } from 'ethers'
import { type Ref, isRef, ref, watch } from 'vue'

import type { AmbrusStudioSaler, ERC721 } from '@/contracts'
import { AmbrusStudioSaler__factory, ERC721__factory } from '@/contracts'

import { useReadonlyEthereum } from './useEthereum'

export function useERC721Contract(
  ethereum: Ref<ethers.providers.Web3Provider | undefined>,
  address: string
): Ref<ERC721 | undefined> {
  const _contract = ref<ERC721>()

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

export function useReadonlyERC721Contract(address: string): Ref<ERC721 | undefined> {
  const contract = ref<ERC721>()

  function getERC721Contract() {
    const ethereum = useReadonlyEthereum()
    const _contract = ERC721__factory.connect(address, ethereum)
    contract.value = _contract
  }

  watch(() => address, getERC721Contract, { immediate: true })

  return contract
}

export function useSalerContract(
  ethereum: Ref<ethers.providers.Web3Provider | undefined>,
  address: string
): Ref<AmbrusStudioSaler | undefined> {
  const _contract = ref<AmbrusStudioSaler>()

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

export function useReadonlySalerContract(address: string): Ref<AmbrusStudioSaler | undefined> {
  const contract = ref<AmbrusStudioSaler>()

  function getSalerContract() {
    const ethereum = useReadonlyEthereum()
    const _contract = AmbrusStudioSaler__factory.connect(address, ethereum)
    contract.value = _contract
  }

  watch(() => address, getSalerContract, { immediate: true })

  return contract
}
