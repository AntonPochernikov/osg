import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './MainRouter.css';
import PageLoader from 'components/common/PageLoader.jsx';
import { ENV_PREFIX } from 'constants/environment.js';
import { Tetris, HomePage } from './LazyRoutes.js';

const renderRoot = () => <Redirect to="/home" />;
const renderTetris = () => <Tetris />;
const renderHome = () => <HomePage />;

const MainRouter = () => (
  <Router basename={ENV_PREFIX}>
    <React.Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/tetris" render={renderTetris} />
        <Route path="/home" render={renderHome} />
        <Route render={renderRoot} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default MainRouter;
