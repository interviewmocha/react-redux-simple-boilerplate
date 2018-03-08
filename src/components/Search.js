import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { get, cancelToken } from "../utils/request"
import { setBusy, storeResult } from "../actions"

class Search extends Component {
	constructor(props) {
		super(props)

		this.onSearchUserClick = this.onSearchUserClick.bind(this)
		this.debounce = this.debounce.bind(this)
		this.autoTrigger = this.autoTrigger.bind(this)

		this.bouncer = this.debounce(this.autoTrigger, 300).bind(this)
	}

	debounce(execFn, wait) {
		let timer

		return function(args) {
			if (timer) {
				clearTimeout(timer)
			}

			timer = setTimeout(() => {
				execFn.apply(this, args)
			}, wait)
		}
	}

	state = {
		userName: "",
	}

	onInputChange(userName) {
		this.setState({ userName })

		this.bouncer()
	}

	autoTrigger() {
		if (this.cancelTokenFn) {
			this.cancelTokenFn()
			this.cancelTokenFn = null
		}
		this.props.dispatch(setBusy(false))
		this.onSearchUserClick()
	}

	onSearchUserClick() {
		if (this.props.busy) {
			return
		}

		this.props.dispatch(setBusy(true))
		get(`https://github-user.now.sh?username=${this.state.userName}`, cancelTokenFn => {
			this.cancelTokenFn = cancelTokenFn
		}).then(data => {
			this.props.dispatch(setBusy(false))
			this.props.dispatch(storeResult(data.data))
		})
	}

	render() {
		return (
			<div>
				<Link to="/history"> History </Link>
				<div className="search-bar">
					<input
						placeholder="Enter a Github User's name"
						value={this.state.userName}
						onChange={event => this.onInputChange(event.target.value)}
						type="text"
					/>
				</div>
				<div className="repo-list">
					<h4>List of available repositories:</h4>
					<p>(click on any repo to visit on GitHub)</p>
					<ul>Here the repo list will be shown</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		busy: state.home.busy,
	}
}

export default connect(mapStateToProps)(Search)
