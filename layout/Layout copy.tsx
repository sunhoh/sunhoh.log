import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
      <div className="pt-[128px] pb-[128px] border border-solid container mx-auto max-w-page py-page">
        <div className="container flex-1 max-w-4xl mx-auto border border-solid lg:px-4">
          <main>{children}</main>
        </div>
      </div>
  );
};

export default React.memo(Layout);