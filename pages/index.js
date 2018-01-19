import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import initStore from '../store'
import { fetchRepositories } from "../actions"
import GithubSearch from '../components/GithubSearch'

class Index extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(fetchRepositories('fakeUser'))

    return { isServer }
  }

  render () {
    return (
      <div>
        <h1>Github Search</h1>
        <GithubSearch/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRepositories: bindActionCreators(user => fetchRepositories(user), dispatch)
})

export default withRedux(
  initStore,
  null,
  mapDispatchToProps
)(Index)
