import React from 'react'

const RepoDetails = ({ repoDetail }) => {
    return (
      <li
        key={repoDetail.username}
        className='list-group-item'
        onClick={() => console.log('ff')}
        >
        <img src={repoDetail.avatar} alt={repoDetail.avatar}/>
        <h3 className='blueText'>{repo.name}</h3>
        <p> Language:
            
        </p>
        <p>Descriptions:</p>

      </li>
    )
}

export default RepoDetails