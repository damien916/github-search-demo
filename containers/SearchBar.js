import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../actions'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value.trim()
    })
  }

  search = () => {
    // TODO set query in URL
    this.props.fetchUsers(this.state.query)
  }

  render () {
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        <span onClick={this.search}>Search</span>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(query => fetchUsers(query), dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
