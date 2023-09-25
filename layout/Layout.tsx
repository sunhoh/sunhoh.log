import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
