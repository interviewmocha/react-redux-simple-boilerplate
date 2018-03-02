import React, { Component } from 'react'
import { get } from '../utils/request'

class Search extends Component {

  constructor(props) {
    super(props)

    this.onSearchUserClick = this.onSearchUserClick.bind(this)
  }

  state = {
    userName: ''
  }

  onInputChange (userName) {
    this.setState({userName})
  }

  onSearchUserClick() {
    get(`https://github-user.now.sh?username=${this.state.userName}`).then(data => console.log(data))
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
              <button 
                onClick={this.onSearchUserClick}
                type="submit"
              >Search </button>
          
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