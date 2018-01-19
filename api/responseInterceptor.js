import interceptor from 'rest/interceptor'

const responseInterceptor = interceptor({
  response: async response => ({
    datas: response.entity,
    code: response.status.code
  })
})

export default responseInterceptor
