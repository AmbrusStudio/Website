import { getCurrentInstance, reactive, toRefs } from 'vue'
import { BigNumber, ethers } from 'ethers'
import Web3Modal from 'web3modal'
import type { BaseProvider } from '@metamask/providers'
import type { UseWallet } from '@/types'
import { getChainInfoFromId } from '@/utils'

type WalletState = {
  account: string | null
  balance: BigNumber
  chainId: number | undefined
  provider?: BaseProvider
  ethereum: ethers.providers.Web3Provider
}

const defaultProvider = ethers.getDefaultProvider() as ethers.providers.Web3Provider

const INITIAL_STATE: WalletState = {
  account: null,
  balance: BigNumber.from(0),
  chainId: undefined,
  ethereum: defaultProvider
}

const walletState = reactive({ ...INITIAL_STATE })
const providerOptions = {} // TODO: change it
const web3Modal = new Web3Modal({
  network: getChainInfoFromId(1)?.name || 'mainnet',
  cacheProvider: true,
  providerOptions
})

export function useWallet(): UseWallet {
  const instance = getCurrentInstance()

  const clearWalletState = () => {
    walletState.account = INITIAL_STATE.account
    walletState.balance = INITIAL_STATE.balance
    walletState.chainId = undefined
    walletState.ethereum = INITIAL_STATE.ethereum
  }

  const getAccountAssets = async () => {
    const signer = walletState.ethereum.getSigner()
    const address = await signer.getAddress()
    const balance = await signer.getBalance()
    const chainId = await signer.getChainId()
    console.debug('getAccountAssets::address', address)
    console.debug('getAccountAssets::balance', balance)
    console.debug('getAccountAssets::chainId', chainId)
    walletState.account = address
    walletState.balance = balance
    walletState.chainId = chainId
  }

  const subscribeProvider = async (provider: BaseProvider) => {
    if (!provider || !provider.on) return

    const ethereum = new ethers.providers.Web3Provider(provider, 'any')
    walletState.ethereum = ethereum

    // Event name from https://docs.metamask.io/guide/ethereum-provider.html#events
    provider.on('disconnect', () => {
      console.debug('Event disconnect')
      reset()
    })
    provider.on('accountsChanged', async (accounts: string[]) => {
      console.debug('Event accountsChanged:', accounts)
      await getAccountAssets()
    })
    provider.on('chainChanged', async (chainId: string) => {
      console.debug('Event chainChanged:', chainId)
      // Metamask strongly recommend reloading the page on chain changes
      if (window) window.location.reload()
    })
  }

  const connect = async () => {
    const provider: BaseProvider = await web3Modal.connect()
    walletState.provider = provider

    await subscribeProvider(provider)
    await getAccountAssets()
  }

  const reset = () => {
    web3Modal.clearCachedProvider()
    clearWalletState()
    instance?.proxy?.$forceUpdate()
  }

  const getBlockNumber = async () => {
    return await walletState.ethereum.getBlockNumber()
  }

  const isConnected = () => {
    return !!(walletState.provider?.isConnected() && walletState.account)
  }

  return { ...toRefs(walletState), connect, reset, getBlockNumber, isConnected }
}
