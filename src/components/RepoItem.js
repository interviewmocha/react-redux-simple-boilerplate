import React from 'react'

const RepoItem = ({ repos }) => {
  return _.map(repos, repo => {
    return (
      <li
        key={repo.id}
        className='list-group-item'
        onClick={() => console.log('ff')}
        >
        <h3 className='blueText'>{repo.name}</h3>
        <p> Language:
            
        </p>
        <p>Description:</p>

      </li>
    )
  })
}

export default RepoListElement