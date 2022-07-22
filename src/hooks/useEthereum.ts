import { ethers } from 'ethers'

import { getDefaultChainInfo, getEtherscanKey, getInfuraKey } from '@/utils'

export function useReadonlyEthereum(): ethers.providers.BaseProvider {
  const infuraKey = getInfuraKey()
  const etherscanKey = getEtherscanKey()
  const defaultChain = getDefaultChainInfo()
  const network = ethers.providers.getNetwork(defaultChain.chainId)
  const ethereum = ethers.getDefaultProvider(network, {
    etherscan: etherscanKey,
    infura: infuraKey
  })
  return ethereum
}
