import { getResponsiveMaterial } from '@/utils'
import { getBlockInfoApi } from '../block'

type BlockInfoHeader = {
  id: number
  block_id: number
  content: string
  create_time: number
  delete_time: number
  html: string
  introduction: string
  material: string
  material_mob: string
  name: string
  sort: number
  update_time: number
  url: string
}

export type HeaderLink = { img: string; url: string }

export async function getHeaderLinks(): Promise<HeaderLink[]> {
  const { data: headerData } = await getBlockInfoApi<BlockInfoHeader[]>('headerIcon')
  console.log('headerData', headerData)
  const sortHeader = headerData.sort((l, r) => (l.sort = r.sort))
  const headers = sortHeader.map((header) => {
    const { material, material_mob, url } = header
    const materialData = getResponsiveMaterial(material, material_mob)
    return { img: materialData.url, url }
  })
  return headers
}
