import type { NFTItem } from '@/types'

const demoNFTItem: NFTItem = {
  id: 1,
  availableTimestamp: 1657111916, // Old time
  // availableTimestamp: 1660147200, // Thursday, August 11, 2022 12:00:00 AM GMT+08:00
  bannerImages: [
    'http://localhost:3000/demo/images/nft-banner-thorn.png',
    'http://localhost:3000/demo/images/nft-banner-thorn@2x.png',
    'http://localhost:3000/demo/images/nft-banner-thorn@3x.png'
  ],
  disclaimer: {
    images: [
      'http://localhost:3000/demo/images/nft-disclaimer.png',
      'http://localhost:3000/demo/images/nft-disclaimer.png',
      'http://localhost:3000/demo/images/nft-disclaimer.png'
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vestibulum diam. Sed aliquet dolor leo, eu facilisis magna porta vel. Etiam vulputate augue ac odio suscipit interdum. Donec nec auctor lectus, eu molestie odio. Nullam euismod, felis eu venenatis tincidunt, arcu enim dictum est, quis viverra nisl est quis est. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt est nec tortor pellentesque finibus. Suspendisse lacinia eu metus id lacinia. Nullam elementum nisl dui, ut iaculis est tristique eget. Suspendisse odio magna, gravida ultricies molestie in, blandit vel dui. Nam convallis ante lacus, a interdum orci bibendum ut. Sed placerat augue vehicula diam bibendum commodo. Sed a porta orci.'
  },
  editions: [
    {
      name: 'Ultimate Edition',
      value: 'ultimate',
      amount: 0,
      total: 1086,
      price: 1.2,
      style: { background: 'linear-gradient(90deg, #202020 0%, #414141 100%)', boxShadow: '' }
    },
    {
      name: 'Legendary Edition',
      value: 'legendary',
      amount: 15,
      total: 1086,
      price: 0.6,
      style: {
        background: 'linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)',
        boxShadow: '0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
      }
    },
    {
      name: 'Epic Edition',
      value: 'epic',
      amount: 10,
      total: 1086,
      price: 0.2,
      style: { background: 'linear-gradient(90deg, #399E98 0%, #88C4C0 100%)', boxShadow: '' }
    }
  ],
  introduction: [
    {
      title: 'NFT Sale',
      content: 'E4C Ranger Rin NFT\nUltimate Edition\nGold Edition\nRed Edition'
    },
    {
      title: 'NFT Utilities',
      content: 'E4C Ranger Rin NFT\nUltimate Edition\nGold Edition\nRed Edition'
    },
    {
      title: 'NFT Staking',
      content: 'E4C Ranger Rin NFT\nUltimate Edition\nGold Edition\nRed Edition'
    }
  ],
  properties: [
    {
      mode: 'mode-9',
      title: 'TRait Group 1',
      data: [
        { key: 'Character', value: 'Rin' },
        { key: 'Hair', value: 'Off-white 1' },
        { key: 'Makeup', value: 'Off-white 1' },
        { key: 'Background', value: 'Off-white 1' },
        { key: 'HeadGear', value: 'Off-white 1' },
        { key: 'Earrings', value: 'Off-white 1' },
        { key: 'Background', value: 'Off-white 1' },
        { key: 'HeadGear', value: 'Off-white 1' },
        { key: 'Earrings', value: 'Off-white 1' }
      ]
    },
    {
      mode: 'mode-6',
      title: 'TRait Group 2',
      data: [
        { key: 'Character', value: 'Rin' },
        { key: 'Hair', value: 'Off-white 1' },
        { key: 'Makeup', value: 'Off-white 1' },
        { key: 'Background', value: 'Off-white 1' },
        { key: 'HeadGear', value: 'Off-white 1' },
        { key: 'Earrings', value: 'Off-white 1' }
      ]
    },
    {
      mode: 'mode-3',
      title: 'TRait Group 3',
      data: [
        { key: 'Character', value: 'Rin' },
        { key: 'Hair', value: 'Off-white 1' },
        { key: 'Makeup', value: 'Off-white 1' }
      ]
    }
  ]
}

export async function getNFTItemInfo(id: number | string): Promise<NFTItem> {
  return demoNFTItem
}
