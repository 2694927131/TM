
import axios from 'axios'

axios.interceptors.request.use(
  config => {
    console.log('config---:', config.headers)
    config.headers = {
      ... config.headers
    }
    console.log('config---:', config.headers)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.defaults.timeout = 36000000 //设置超时时间

axios.interceptors.response.use(
  response => {
    // 检测某种状态进行重定向
    return response
  },
  error => {
    return Promise.resolve(error.response)
  }
)


export default axios


