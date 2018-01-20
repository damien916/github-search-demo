import interceptor from 'rest/interceptor'

export default interceptor({
  response: response => response.entity
})
