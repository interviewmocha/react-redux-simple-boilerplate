import React, { Component } from "react"
import { connect } from "react-redux"

class SearchHistory extends Component {
	renderList() {
		return this.props.history.map(searchedItem => <li> {searchedItem.username} </li>)
	}

	render() {
		return <div>{this.renderList()}</div>
	}
}

function mapStateToProps(state) {
	return {
		history: state.home.history,
	}
}

export default connect(mapStateToProps)(SearchHistory)
