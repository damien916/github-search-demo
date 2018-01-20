import ResourceFactory from './resourceFactory'

class ResourceUsers extends ResourceFactory {
  constructor () {
    super({ entrypoint: 'users' })
  }

  getRepositories (userName = '') {
    return this.getAll(
      { },
      { entrypoint: `${this.entrypoint}/${userName}/repos` }
    )
  }
}

export default new ResourceUsers()
