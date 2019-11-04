import React from 'react';
import Header from 'modules/common/components/Header';
import ProgressBar from 'modules/common/components/ProgressBar';

export default function PageLoader() {
  return (
    <>
      <Header title="Loading..." />
      <ProgressBar />
    </>
  );
}
