import WalletConnect from '@walletconnect/web3-provider'
import type {
  ICoreOptions as Web3ModalOptions,
  IProviderOptions as ProviderOptions
} from 'web3modal'

import { getDefaultChainInfo, getInfuraKey } from '@/utils'

const network = getDefaultChainInfo().name
const infuraId = getInfuraKey()

const providerOptions: ProviderOptions = {
  walletconnect: {
    package: WalletConnect,
    options: { infuraId }
  }
}

export const web3ModalOptions: Partial<Web3ModalOptions> = {
  network,
  cacheProvider: true,
  providerOptions
}
