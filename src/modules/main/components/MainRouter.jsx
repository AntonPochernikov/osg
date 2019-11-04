import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import PageLoader from 'modules/common/components/PageLoader';
import { ENV_PREFIX } from 'constants/environment';
import { HomePage, Tetris, Snake } from './LazyRoutes';

const renderRoot = () => <Redirect to="/home" />;
const renderHome = () => <HomePage />;
const renderTetris = () => <Tetris />;
const renderSnake = () => <Snake />;

export default function MainRouter() {
  return (
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
}
