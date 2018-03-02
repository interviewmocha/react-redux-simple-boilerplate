import { BrowserRouter as Router, Route } from "react-router-dom"
import React from 'react'

import Main from './Main'
import SearchHistory from './SearchHistory'

const AppRouter = () => (
  <Router>
      <div>
          <Route exact path="/" component={Main} />
          <Route path="/history" component={SearchHistory} />
      </div>
  </Router>
)

export default AppRouter