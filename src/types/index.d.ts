export type NFTItemDisclaimer = {
  images: string | string[]
  content: string
}

export type NFTItemIntro = {
  title: string
  content: string
}

export type NFTPropertyMode = 'mode-3' | 'mode-6' | 'mode-9'

export type NFTPropertyData = {
  key: string
  value: string
}

export type NFTItemProperty = {
  mode: NFTPropertyMode
  title: string
  data: NFTPropertyData[]
}

export type NFTItem = {
  id: string | number
  bannerImages: string | string[]
  disclaimer: NFTItemDisclaimer
  introduction: NFTItemIntro[]
  properties: NFTItemProperty[]
}
