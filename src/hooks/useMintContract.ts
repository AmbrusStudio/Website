import { ethers } from 'ethers'
import { type Ref, isRef, ref, watch } from 'vue'

import { type AmbrusGenesisPeriod, AmbrusGenesisPeriod__factory } from '@/contracts'

function getMintContractAddress(): string {
  const address = import.meta.env.VITE_MINT_CONTRACT_ADDRESS
  if (!address) throw new TypeError('VITE_MINT_CONTRACT_ADDRESS not set')
  return ethers.utils.getAddress(address)
}

export function useMintContract(ethereum: Ref<ethers.providers.Web3Provider | undefined>) {
  const _contract = ref<AmbrusGenesisPeriod | undefined>(undefined)

  function execute() {
    if (!ethereum.value || typeof ethereum.value.getSigner !== 'function') return
    const address = getMintContractAddress()
    const signer = ethereum.value.getSigner()
    const contract = AmbrusGenesisPeriod__factory.connect(address, signer)
    _contract.value = contract
  }

  if (isRef(ethereum)) {
    watch(ethereum, execute, { immediate: true })
  } else {
    execute()
  }
  return { mintContract: _contract }
}
