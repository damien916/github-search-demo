import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { Router } from '../routes'
import { setSettings } from '../actions/settings'
import SearchResults from '../components/SearchResults'

class SearchResultsContainer extends React.Component {
  showList = () => this.setView('list')
  showBlocs = () => this.setView('blocs')

  setView = view => {
    this.props.setSettings({ view })

    Router.pushRoute('index', {
      username: this.props.currentUser.name,
      view
    })
  }

  render () {
    const { currentUser, repositories, view } = this.props

    if (typeof currentUser.id === 'undefined') {
      return null
    }

    return (
      <SearchResults
        user={currentUser}
        showList={this.showList}
        showBlocs={this.showBlocs}
        repositories={_.map(repositories, repository => repository)}
        view={view}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  repositories: state.repositories.byId,
  view: state.settings.view || 'list'
})

const mapDispatchToProps = dispatch => ({
  setSettings: bindActionCreators(settings => setSettings(settings), dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer)
