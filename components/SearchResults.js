import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import BlocsIcon from 'material-ui/svg-icons/navigation/apps'
import Repositories from './Repositories'

const SearchResults = ({ user, showList, showBlocs, repositories, view }) => {
  return (
    <Card className="card" expandable={false}>
      <CardHeader
        title={user.name}
        subtitle={user.url}
        avatar={user.avatar}
      >
        <div className="card-header__buttons">
          <RaisedButton icon={<ListIcon/>} onClick={showList} primary style={{margin: 10}}/>
          <RaisedButton icon={<BlocsIcon/>} onClick={showBlocs} primary style={{margin: 10}}/>
        </div>
      </CardHeader>

      <CardText>
        <Repositories entries={repositories} view={view} />
      </CardText>
    </Card>
  )
}

export default SearchResults
