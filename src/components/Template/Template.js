import React, { Fragment } from 'react';
import Header from 'components/Common/Header';

function Template({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

export default Template;
