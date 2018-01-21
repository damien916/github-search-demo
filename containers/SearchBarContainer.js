// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router } from '../routes'
import _ from 'lodash'
import { fetchUsers, setCurrentUser, fetchRepositories } from '../actions/users'
import SearchBar from '../components/SearchBar'

type Props = {
  users: Object,
  currentUser: Object,
  fetchUsers: Function,
  setCurrentUser: Function,
  fetchRepositories: Function
}

class SearchBarContainer extends React.Component<Props> {
  delayedSearch: Function
  query: String

  constructor (props) {
    super(props)

    this.query = _.get(this.props.currentUser, 'name', null)
  }

  componentWillMount () {
    this.delayedSearch = _.debounce(query => {
      this.props.fetchUsers(query)
    }, 300)
  }

  handleChange = query => {
    if (this.query !== query) { // prevent useless call when select exactly searched user
      this.delayedSearch(query.trim())
      this.query = query
    }
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
  currentUser: state.users.currentUser,
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
