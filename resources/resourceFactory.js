import client from '../api/client'

export default class ResourceFactory {
  constructor ({ entrypoint }) {
    this.entrypoint = entrypoint
  }

  get (id, params = {}, options = {}) {
    const entrypoint = options.entrypoint || `${this.entrypoint}/${id}`

    return client({
      method: 'GET',
      path: entrypoint + (options.template || ''),
      params
    })
  }

  getAll (params = {}, options = {}) {
    const entrypoint = options.entrypoint || this.entrypoint

    return client({
      method: 'GET',
      path: entrypoint + (options.template || ''),
      params
    })
  }

  post (params = {}, options = {}) {
    const entrypoint = options.entrypoint || this.entrypoint

    return client({
      method: 'POST',
      path: entrypoint + (options.template || ''),
      entity: params
    })
  }
}
