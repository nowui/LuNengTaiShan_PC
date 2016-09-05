import React, { PropTypes } from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import NotFound from '../components/NotFound'
import Index from '../components/Index'
import Main from '../components/Main'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/">
    	<IndexRedirect to="index" />
        <Route path="index" component={Index}></Route>
        <Route path="main" component={Main}></Route>
	    <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
}

export default Routes
