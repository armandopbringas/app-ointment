import React from 'react';
import HeaderNav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <HeaderNav />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
