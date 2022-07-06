export type NFTItemDisclaimer = {
  /** 商品信息图片列表 */
  images: string | string[]
  /** 免责声明正文 */
  content: string
}

export type NFTItemIntro = {
  /** 商品介绍段落标题 */
  title: string
  /** 商品介绍正文，支持 \n 换行 */
  content: string
}

export type NFTPropertyMode = 'mode-3' | 'mode-6' | 'mode-9'

export type NFTPropertyData = {
  /** 属性名称 */
  key: string
  /** 属性值 */
  value: string
}

export type NFTItemProperty = {
  /** 属性排列方式（一列 mode-3，两列 mode-6，三列 mode-9） */
  mode: NFTPropertyMode
  /** 属性段落标题 */
  title: string
  /** 属性数据 */
  data: NFTPropertyData[]
}

export type NFTItemEditionStyle = {
  /**
   * 商品类型颜色渐变，CSS 字符串，
   * 如 "linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)"
   */
  background: string
  /**
   * 商品类型发光效果，CSS 字符串，
   * 如 "0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)"
   */
  boxShadow: string
}

export type NFTItemEdition = {
  /** 商品类型名称 */
  name: string
  /** 商品类型值（用于 API 传参） */
  value: string
  /** 商品类型剩余数量，为 0 显示 "Sold Out" */
  amount: number
  /** 商品类型总量，用于展示 "<amount>/<total> Left" */
  total: number
  /** 商品类型价格 */
  price: number
  /** 商品类型颜色 */
  style: NFTItemEditionStyle
}

export type NFTItem = {
  /** NFT 的唯一 ID */
  id: string | number
  /** NFT 发售时间，UNIX 时间戳，前端会进行时区换算 */
  availableTimestamp: number
  /**
   * NFT Banner 图，为列表的时候为多分辨率图片，
   * 文件名需包含 @ 符号，如 @1x @2x @3x
   */
  bannerImages: string | string[]
  /** NFT 商品信息和免责声明 */
  disclaimer: NFTItemDisclaimer
  /** NFT 商品类型 */
  editions: NFTItemEdition[]
  /** NFT 商品介绍（第一部分） */
  introduction: NFTItemIntro[]
  /** NFT 属性介绍（第二部分） */
  properties?: NFTItemProperty[]
}
