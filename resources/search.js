import ResourceFactory from './resourceFactory'

class ResourceSearch extends ResourceFactory {
  constructor () {
    super({ entrypoint: 'search' })
  }

  getUsers (q = '') {
    return this.getAll(
      { q },
      { entrypoint: `${this.entrypoint}/users`, template: '{?q}' }
    )
  }
}

export default new ResourceSearch()
