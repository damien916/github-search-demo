import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router } from '../routes'
import _ from 'lodash'
import { fetchUsers, setCurrentUser, fetchRepositories } from '../actions/users'
import SearchBar from '../components/SearchBar'

class SearchBarContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.delayedSearch = _.debounce(query => {
      this.props.fetchUsers(query)
    }, 300)
  }

  handleChange = query => {
    this.delayedSearch(query.trim())
  }

  handleSelectUser = o => {
    const { users, setCurrentUser, fetchRepositories } = this.props

    let user

    if (typeof o.userId === 'number') { // Select in list
      user = users[o.userId]
    } else { // Search by pressing enter key
      user = _.find(users, {'name': o.trim()})
    }

    if (typeof user !== 'undefined') {
      setCurrentUser(user)
      fetchRepositories(user.name)
      Router.pushRoute('index', {username: user.name})
    }
  }

  getDataSource = users => {
    return _.map(users, (user) => ({
      text: user.name,
      userId: user.id
    }))
  }

  render () {
    return (
      <SearchBar
        userList={this.getDataSource(this.props.users)}
        onUpdateInput={this.handleChange}
        onSelectUser={this.handleSelectUser}
      />
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.byId
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(query => fetchUsers(query), dispatch),
  setCurrentUser: bindActionCreators(user => setCurrentUser(user), dispatch),
  fetchRepositories: bindActionCreators(userName => fetchRepositories(userName), dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContainer)
