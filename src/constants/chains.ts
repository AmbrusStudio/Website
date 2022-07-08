export enum UniswapSupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,
  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001
}

export enum PancakeSwapSupportedChainId {
  BSC_MAINNET = 56,
  BSC_TESTNET = 97
}

export type SupportedChainId = UniswapSupportedChainId | PancakeSwapSupportedChainId
export const SupportedChainId = Object.assign(
  {},
  UniswapSupportedChainId,
  PancakeSwapSupportedChainId
)

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: 'mainnet',
  [SupportedChainId.ROPSTEN]: 'ropsten',
  [SupportedChainId.RINKEBY]: 'rinkeby',
  [SupportedChainId.GOERLI]: 'goerli',
  [SupportedChainId.KOVAN]: 'kovan',
  [SupportedChainId.POLYGON]: 'polygon',
  [SupportedChainId.POLYGON_MUMBAI]: 'polygon_mumbai',
  [SupportedChainId.ARBITRUM_ONE]: 'arbitrum',
  [SupportedChainId.ARBITRUM_RINKEBY]: 'arbitrum_rinkeby',
  [SupportedChainId.OPTIMISM]: 'optimism',
  [SupportedChainId.OPTIMISTIC_KOVAN]: 'optimistic_kovan',
  [SupportedChainId.BSC_MAINNET]: 'binance',
  [SupportedChainId.BSC_TESTNET]: 'binance_test'
}

interface BaseChainInfo {
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly swapLink: string
  readonly infoLink: string
  readonly label: string
  readonly name: string
  readonly infuraNameKey?: string
  readonly rpcUrl?: string
  readonly statusPage?: string
  readonly helpCenterUrl?: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
}
export type ChainInfo = BaseChainInfo

export type ChainInfoMap = {
  readonly [chainId in SupportedChainId]: ChainInfo
}
export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.MAINNET]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Ethereum',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.MAINNET],
    infuraNameKey: 'mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 }
  },
  [SupportedChainId.RINKEBY]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://rinkeby.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Rinkeby',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.RINKEBY],
    infuraNameKey: 'rinkeby',
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'rETH', decimals: 18 }
  },
  [SupportedChainId.ROPSTEN]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://ropsten.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Ropsten',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.ROPSTEN],
    infuraNameKey: 'ropsten',
    nativeCurrency: { name: 'Ropsten Ether', symbol: 'ropETH', decimals: 18 }
  },
  [SupportedChainId.KOVAN]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://kovan.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Kovan',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.KOVAN],
    infuraNameKey: 'kovan',
    nativeCurrency: { name: 'Kovan Ether', symbol: 'kovETH', decimals: 18 }
  },
  [SupportedChainId.GOERLI]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://goerli.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Görli',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.GOERLI],
    infuraNameKey: 'goerli',
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 }
  },
  [SupportedChainId.OPTIMISM]: {
    bridge: 'https://gateway.optimism.io/?chainId=1',
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/optimism/',
    label: 'Optimism',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.OPTIMISM],
    infuraNameKey: 'optimism',
    statusPage: 'https://optimism.io/status',
    helpCenterUrl:
      'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 }
  },
  [SupportedChainId.OPTIMISTIC_KOVAN]: {
    bridge: 'https://gateway.optimism.io/',
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/optimism/',
    label: 'Optimistic Kovan',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.OPTIMISTIC_KOVAN],
    infuraNameKey: 'optimism-kovan',
    statusPage: 'https://optimism.io/status',
    helpCenterUrl:
      'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
    nativeCurrency: {
      name: 'Optimistic Kovan Ether',
      symbol: 'kovOpETH',
      decimals: 18
    }
  },
  [SupportedChainId.ARBITRUM_ONE]: {
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://arbiscan.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/arbitrum',
    label: 'Arbitrum',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.ARBITRUM_ONE],
    infuraNameKey: 'arbitrum-mainnet',
    helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 }
  },
  [SupportedChainId.ARBITRUM_RINKEBY]: {
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://rinkeby-explorer.arbitrum.io/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/arbitrum/',
    label: 'Arbitrum Rinkeby',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.ARBITRUM_RINKEBY],
    infuraNameKey: 'arbitrum-rinkeby',
    helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
    nativeCurrency: {
      name: 'Rinkeby Arbitrum Ether',
      symbol: 'rinkArbETH',
      decimals: 18
    }
  },
  [SupportedChainId.POLYGON]: {
    bridge: 'https://wallet.polygon.technology/bridge',
    docs: 'https://polygon.io/',
    explorer: 'https://polygonscan.com/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Polygon',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.POLYGON],
    infuraNameKey: 'polygon-mainnet',
    nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 }
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    bridge: 'https://wallet.polygon.technology/bridge',
    docs: 'https://polygon.io/',
    explorer: 'https://mumbai.polygonscan.com/',
    swapLink: 'https://app.uniswap.org/#/swap',
    infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Polygon Mumbai',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.POLYGON_MUMBAI],
    infuraNameKey: 'polygon-mumbai',
    nativeCurrency: {
      name: 'Polygon Mumbai Matic',
      symbol: 'mMATIC',
      decimals: 18
    }
  },
  [SupportedChainId.BSC_MAINNET]: {
    docs: 'https://docs.pancakeswap.finance/',
    explorer: 'https://bscscan.com/',
    swapLink: 'https://pancakeswap.finance/swap',
    infoLink: 'https://pancakeswap.finance/info/',
    label: 'Binance Smart Chain',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.BSC_MAINNET],
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    nativeCurrency: { name: 'Binance Coin', symbol: 'BNB', decimals: 18 }
  },
  //@TODO Content needs to be modified
  [SupportedChainId.BSC_TESTNET]: {
    docs: 'https://docs.pancakeswap.finance/',
    explorer: 'https://testnet.bscscan.com/',
    swapLink: 'https://pancakeswap.ibhagwan.workers.dev/#/swap',
    infoLink: 'https://pancakeswap.finance/info/',
    label: 'Binance Smart Chain Testnet',
    name: CHAIN_IDS_TO_NAMES[SupportedChainId.BSC_TESTNET],
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    nativeCurrency: { name: 'Binance Coin Test', symbol: 'tBNB', decimals: 18 }
  }
}

export const DefaultChainId = Number(UniswapSupportedChainId.RINKEBY) as SupportedChainId
