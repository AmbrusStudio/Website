import { serveRequest } from '../axios.js'

export const getBlockInfoApi = (key) =>
  serveRequest.get(`/NFT-API/getBlockInfoApi?langId=14&key=${key}`)
