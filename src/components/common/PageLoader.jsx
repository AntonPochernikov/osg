import React from 'react';
import Header from './Header.jsx';
import ProgressBar from './ProgressBar.jsx';

const PageLoader = () => [
  <Header key='header' title='Loading...' />,
  <ProgressBar key='progress' />,
];

export default PageLoader;
