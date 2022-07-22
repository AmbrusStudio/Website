import { ethers } from 'ethers'

import { getChainInfo, getEtherscanKey, getInfuraKey } from '@/utils'

export function useReadonlyEthereum(): ethers.providers.BaseProvider {
  const infuraKey = getInfuraKey()
  const etherscanKey = getEtherscanKey()
  const defaultChain = getChainInfo()
  const network = ethers.providers.getNetwork(defaultChain.chainId)
  const ethereum = ethers.getDefaultProvider(network, {
    etherscan: etherscanKey,
    infura: infuraKey
  })
  return ethereum
}
