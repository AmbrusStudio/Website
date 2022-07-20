import type { NFTItem } from '@/types'

const demoNFTItem: NFTItem = {
  information: {
    images: [
      'https://i.imgur.com/CRvY7vc.png',
      'https://i.imgur.com/IBqASlD.png',
      'https://i.imgur.com/nmDWQ0m.png'
    ],
    type: 'E4C Fallen Arena',
    name: 'Thorn: Bumble Fighter',
    content:
      "Pearce's fixed-wing X6 provides a surprising amount of comfortable living space aboard a compact and highly agile fighter patrol ship. A supremely capable combat vessel with an extended atmoglass canopy provides a conspicuous piloting advantage as well as a way"
  },
  disclaimer: {
    images: [
      'https://imgur.com/V0xOBYB.png',
      'https://imgur.com/V0xOBYB.png',
      'https://imgur.com/V0xOBYB.png'
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vestibulum diam. Sed aliquet dolor leo, eu facilisis magna porta vel. Etiam vulputate augue ac odio suscipit interdum. Donec nec auctor lectus, eu molestie odio. Nullam euismod, felis eu venenatis tincidunt, arcu enim dictum est, quis viverra nisl est quis est. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt est nec tortor pellentesque finibus. Suspendisse lacinia eu metus id lacinia. Nullam elementum nisl dui, ut iaculis est tristique eget. Suspendisse odio magna, gravida ultricies molestie in, blandit vel dui. Nam convallis ante lacus, a interdum orci bibendum ut. Sed placerat augue vehicula diam bibendum commodo. Sed a porta orci.'
  },
  editions: [
    {
      name: 'Legendary Edition',
      value: 'legendary',
      contract: '0x5f9f4D516F24b47A6d233f11Be32Ebbfe115Cdb7',
      total: 400,
      style: {
        background: 'linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)',
        boxShadow: '0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
      }
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
  ]
}

export async function getNFTItemInfo(): Promise<NFTItem> {
  return demoNFTItem
}
