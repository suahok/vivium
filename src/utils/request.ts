import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_PROXY_API,
  timeout: 3000
})

instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

interface RequestRow {
  method: Method
  url: string
}

export function request<T = any, D = any>(config: RequestRow & AxiosRequestConfig<D>) {
  return new Promise<T>((resolve, reject) => {
    instance(config)
      .then(({ data }: AxiosResponse<T>) => {
        return resolve(data)
      })
      .catch(err => {
        return reject(err)
      })
  })
}
