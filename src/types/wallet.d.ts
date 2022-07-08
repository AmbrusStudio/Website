import type { Ref } from 'vue'
import type { BigNumber } from 'ethers'

export type AccountType = 'contract' | 'normal'

export type Status = 'connected' | 'disconnected' | 'connecting' | 'error'

export type UseWallet = {
  account: Ref<string | null>
  balance: Ref<BigNumber>
  chainId: Ref<number | undefined>
  // connector: string | null
  // connectors: object
  // error: Error | null
  // ethereum?: unknown
  // networkName: string | null
  // status: Status
  // type: AccountType | null
  connect: () => Promise<void>
  reset: () => void
  getBlockNumber: () => Promise<number>
  isConnected: () => boolean
}
