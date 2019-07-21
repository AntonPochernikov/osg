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
import { HomePage, Tetris, Snake } from './LazyRoutes.js';

const renderRoot = () => <Redirect to="/home" />;
const renderHome = () => <HomePage />;
const renderTetris = () => <Tetris />;
const renderSnake = () => <Snake />;

const MainRouter = () => (
  <Router basename={ENV_PREFIX}>
    <React.Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/home" render={renderHome} />
        <Route path="/tetris" render={renderTetris} />
        <Router path="/snake" render={renderSnake} />
        <Route render={renderRoot} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default MainRouter;
