import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import LayoutFullpage from './LayoutFullpage';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
