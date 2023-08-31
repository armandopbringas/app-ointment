import React from 'react';
import HeaderNav from '../Nav/Nav';
import '../../app/App.scss';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
