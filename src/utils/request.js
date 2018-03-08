import axios from "axios"

const CancelToken = axios.CancelToken

export const get = (url, tokenCanceller) => {
	return axios.get(url, {
		cancelToken: new CancelToken(function executor(c) {
			// An executor function receives a cancel function as a parameter
			tokenCanceller(c)
		}),
	})
}

export const post = (url, params) => {
	return axios.post(url, params)
}
