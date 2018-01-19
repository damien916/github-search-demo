import ResourceFactory from './resourceFactory'

class ResourceUsers extends ResourceFactory {
  constructor () {
    super({ entrypoint: 'users' })
  }

  getRepositories (user = '') {
    return this.getAll(
      { },
      { entrypoint: `${this.entrypoint}/${user}/repos` }
    )
  }
}

export default new ResourceUsers()
