import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
      <div className="pt-[128px] pb-[128px]">
        <div className="container flex-1 max-w-4xl mx-auto lg:px-4">
          <main>{children}</main>
        </div>
      </div>
  );
};

export default React.memo(Layout);