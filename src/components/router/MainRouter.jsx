import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './MainRouter.css';
import PageLoader from '../common/PageLoader.jsx';
import { Tetris, HomePage } from './LazyRoutes.js';

const MainRouter = () => {
  const renderRoot = () => <Redirect to='/home' />;
  const renderTetris = () => <Tetris />;
  const renderHome = () => <HomePage />;

  return (
    <Router>
      <div className='router'>
        <React.Suspense fallback={<PageLoader />}>
          <Route exact path='/' render={renderRoot} />
          <Route path='/tetris' render={renderTetris} />
          <Route path='/home' component={renderHome} />
        </React.Suspense>
      </div>
    </Router>
  );
};

export default MainRouter;
