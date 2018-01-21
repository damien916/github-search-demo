// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import initStore from '../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Head from 'next/head'
import AppBar from 'material-ui/AppBar'
import GithubSearch from '../components/GithubSearch'
import { fetchRepositories } from '../actions/users'
import { setSettings } from '../actions/settings'
import stylesheet from 'styles/index.scss'

type Props = {
  userAgent: String
}

class Index extends React.Component<Props> {
  static async getInitialProps ({ store, isServer, req, query }) {
    if (isServer) { // SSR
      if (typeof query.username !== 'undefined') {
        await store.dispatch(fetchRepositories(query.username))
      }

      if (typeof query.view !== 'undefined') {
        await store.dispatch(setSettings({view: query.view}))
      }
    }

    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { isServer, userAgent, query }
  }

  render () {
    const { userAgent } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
        <div>
          <Head>
            <title>GitHub search demo with React</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          </Head>
          <div className="main-container">
            <AppBar title="GitHub search demo with React" showMenuIconButton={false}/>
            <GithubSearch/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRepositories: bindActionCreators(userName => fetchRepositories(userName), dispatch),
  setSettings: bindActionCreators(settings => setSettings(settings), dispatch)
})

export default withRedux(
  initStore,
  null,
  mapDispatchToProps
)(Index)
