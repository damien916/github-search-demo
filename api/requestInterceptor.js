import interceptor from 'rest/interceptor'

export default interceptor({
  request: request => {
    if (!request.headers) request.headers = {}
    if (typeof window === 'undefined') request.headers['User-Agent'] = 'NodeJs'

    return request
  }
})
