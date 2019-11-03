import React from 'react';
import Header from 'components/common/Header';
import ProgressBar from 'components/common/ProgressBar';

const PageLoader = () => (
  <>
    <Header title="Loading..." />
    <ProgressBar />
  </>
);

export default PageLoader;
