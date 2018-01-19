import React from 'react'
import { connect } from 'react-redux'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { repositories } = this.props
    console.log('SearchResults render', this.props)

    return (
      <div>
        Results : {repositories.length}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.allIds
})

export default connect(
  mapStateToProps,
  null
)(SearchResults)
