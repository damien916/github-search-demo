// @flow
import React from 'react'
import Repository from './Repository'

type Props = {
  entries: Array<Object>,
  view: String
}

const Repositories = ({ entries, view } : Props) => {
  if (entries.length === 0) {
    return (
      <p className="repositories__none">This user has no public repositories</p>
    )
  }

  return (
    // FlowIgnore
    <div className={`repositories__${view}`}>
     { entries.map(entry => <Repository key={entry.id} {...entry} />) }
    </div>
  )
}

export default Repositories
