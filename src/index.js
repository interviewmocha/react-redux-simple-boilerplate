import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Main extends Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return <div> Test </div>
  }
}

console.log('React DOm : ', ReactDOM)

ReactDOM.render( <Main/>, document.getElementById('root'))