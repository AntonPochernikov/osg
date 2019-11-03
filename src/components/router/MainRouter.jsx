import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './MainRouter.css';
import PageLoader from 'components/common/PageLoader';
import { ENV_PREFIX } from 'constants/environment';
import { HomePage, Tetris, Snake } from './LazyRoutes';

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
        <Route path="/snake" render={renderSnake} />
        <Route render={renderRoot} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default MainRouter;
