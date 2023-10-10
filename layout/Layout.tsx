import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:max-w-4xl transition-all lg:px-8">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
