import React from 'react';

import NavbarApp from './Navbar';

function Layout({ children }) {
  return (
    <>
      <NavbarApp />
      <main>{children}</main>
      <footer>Copyright © 2020</footer>
    </>
  );
}

export default Layout;
