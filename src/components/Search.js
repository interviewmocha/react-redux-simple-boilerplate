import React, { Component } from 'react'

class Search extends Component {

  state = {
    userName: ''
  }

  onInputChange (userName) {
    this.setState({userName})
  }

  render()  {
    return (
      <div>
        <div className='search-bar'>
          <input
            placeholder="Enter a Github User's name"
            value={this.state.userName}
            onChange={event => this.onInputChange(event.target.value)}
            type='text'
          />
        </div>
        <div className='repo-list'>
          <h4>List of available repositories:</h4>
          <p>(click on any repo to visit on GitHub)</p>
          <ul>
            Here the repo list will be shown
          </ul>
        </div>
      </div>
    )
  }
}
export default Search