import React from 'react';
import Header from 'components/Common/Header';

function Template({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Template;
