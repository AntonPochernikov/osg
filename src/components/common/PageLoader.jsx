import React from 'react';
import Header from './Header.jsx';
import ProgressBar from './ProgressBar.jsx';

const PageLoader = () => (
  <>
    <Header title="Loading..." />
    <ProgressBar />
  </>
);

export default PageLoader;
