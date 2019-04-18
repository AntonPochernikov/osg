import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './MainRouter.css';
import PageLoader from '../common/PageLoader.jsx';
import { Tetris, HomePage } from './LazyRoutes.js';

export default class MainRouter extends React.Component {
  renderRoot = () => <Redirect to='/home' />

  renderTetris = () => <Tetris />

  renderHome = () => <HomePage />

  render() {
    return (
      <Router>
        <div className='router'>
          <React.Suspense fallback={<PageLoader />}>
            <Route exact path='/' render={this.renderRoot} />
            <Route path='/tetris' render={this.renderTetris} />
            <Route path='/home' component={this.renderHome} />
          </React.Suspense>
        </div>
      </Router>
    );
  }
}
