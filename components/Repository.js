import React from 'react'
import Badge from 'material-ui/Badge'
import WatcherIcon from 'material-ui/svg-icons/action/visibility'
import StarIcon from 'material-ui/svg-icons/toggle/star'
import ForkIcon from 'material-ui/svg-icons/social/share'

const Repository = ({ name, url, language, forks, stars, watchers }) => {
  return (
    <div className="repository">
      <div className="repository__language">{language}</div>

      <div className="repository__infos">
        <div className="repository__name">{name}</div>
        <div className="repository__url">{url}</div>
      </div>

      <div className="repository__counts">
        <Badge badgeContent={watchers} secondary><WatcherIcon /></Badge>
        <Badge badgeContent={stars} secondary><StarIcon /></Badge>
        <Badge badgeContent={forks} secondary><ForkIcon /></Badge>
      </div>
    </div>
  )
}

export default Repository
