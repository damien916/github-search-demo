import React from 'react'
import { connect } from "react-redux"
import SearchBarContainer from '../containers/SearchBarContainer'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Snackbar from 'material-ui/Snackbar'

const GithubSearch = ({ errors }) => (
  <div>
    <SearchBarContainer/>
    <SearchResultsContainer/>
    { errors.map((error, index) => (
      <Snackbar
        key={index}
        open
        message={error}
        autoHideDuration={5000}
      />
    ))}
  </div>
)

const mapStateToProps = state => ({
  errors: [state.users.error, state.repositories.error].filter(e => e !== false),
})

export default connect(
  mapStateToProps,
  null
)(GithubSearch)
