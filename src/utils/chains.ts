import {
  CHAIN_IDS_TO_NAMES,
  CHAIN_INFO,
  DefaultChainId,
  SupportedChainId
} from '@/constants/chains'
import type { ChainInfo } from '@/constants/chains'

export function getChainIdFromName(name: string): number | undefined {
  const entry = Object.entries(CHAIN_IDS_TO_NAMES).find(([, n]) => n === name)
  const chainId = entry?.[0]
  return chainId ? parseInt(chainId) : undefined
}

export function getChainNameFromId(id: string | number): string | undefined {
  // casting here may not be right but fine to return undefined if it's not a supported chain ID
  return CHAIN_IDS_TO_NAMES[id as SupportedChainId] || ''
}

export function getChainInfoFromName(name: string): ChainInfo | undefined {
  return CHAIN_INFO[getChainIdFromName(name) as SupportedChainId]
}

export function getChainInfoFromId(id: string | number): ChainInfo | undefined {
  return CHAIN_INFO[id as SupportedChainId]
}

export function getChainInfo(): ChainInfo {
  const chainId: string | undefined = import.meta.env.VITE_CHAIN_ID
  if (!chainId) console.warn('VITE_CHAIN_ID not set')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return getChainInfoFromId(chainId || DefaultChainId)!
}

export function getInfuraId(): string | undefined {
  const infuraId = import.meta.env.VITE_INFURA_API_KEY
  if (!infuraId) throw new TypeError('VITE_INFURA_API_KEY not set')
  return infuraId
}

export function getInfuraUrl(id: string | number): string | undefined {
  const chainInfo = getChainInfoFromId(id)
  if (!chainInfo) return undefined
  if (chainInfo.infuraNameKey) {
    const infuraId = getInfuraId()
    return `https://${chainInfo.infuraNameKey}.infura.io/v3/${infuraId}`
  }
  if (chainInfo.rpcUrl) return chainInfo.rpcUrl
  return undefined
}
