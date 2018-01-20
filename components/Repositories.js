import React from 'react'
import Repository from './Repository'

const Repositories = ({ entries, view }) => {
  if (entries.length === 0) {
    return (
      <p className="repositories__none">This user has no public repositories</p>
    )
  }

  return (
    <div className={`repositories__${view}`}>
     { entries.map(entry => <Repository key={entry.id} {...entry} />) }
    </div>
  )
}

export default Repositories
