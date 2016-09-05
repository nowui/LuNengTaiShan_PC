import React, { PropTypes } from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import NotFound from '../components/NotFound'
import Index from '../components/Index'
import Main from '../components/Main'
import Project from '../components/Project'
import Sport from '../components/Sport'
import Economic from '../components/Economic'
import Video from '../components/Video'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/">
    	<IndexRedirect to="index" />
        <Route path="index" component={Index}></Route>
        <Route path="main" component={Main}></Route>
        <Route path="project" component={Project}></Route>
        <Route path="sport" component={Sport}></Route>
        <Route path="economic" component={Economic}></Route>
        <Route path="video" component={Video}></Route>
	    <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
}

export default Routes
