import React from 'react'
import renderer from 'react-test-renderer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Repository from '../components/Repository'

describe('Repository Snapshot Testing', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <Repository
        name="John Doe"
        url="http://www.john-doe.com"
        language="Javascript"
        forks={4}
        stars={5}
        watchers={6}
      />
    </MuiThemeProvider>
  )

  it('Render a repository', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})