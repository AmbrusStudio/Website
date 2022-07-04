import Axios from 'axios'

const err = (error) => {
  if (error.response) {
    console.info('接口响应失败，请联系管理员', 5)
  } else if (String(error).indexOf('timeout') > -1) {
    console.info('请求超时', 5)
  }
  return Promise.reject(error)
}

// 创建系统内服务的axios
const serveRequest = Axios.create({
  timeout: 60000 // 请求超时时间
})
// 添加请求拦截器
serveRequest.interceptors.request.use((config) => {
  return config
}, err)

// 响应拦截器
serveRequest.interceptors.response.use((response) => {
  const res = response.data
  if (res.code !== 200) {
    if (res.code === 500) {
      console.info(`服务请求出错: ${res.msg}`, 3)
    } else {
      console.info(`服务请求失败，请联系管理员：${res.msg}`, 3)
    }
    return Promise.reject(res.msg)
  }
  // 正常返回数据
  return response.data
}, err)

export { serveRequest }
