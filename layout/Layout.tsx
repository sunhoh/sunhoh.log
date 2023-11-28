import React from 'react';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <div className="mx-auto max-w-page py-page">
        <div className="px-4 main-grid md:flex md:flex-col md:justify-center md:gap-8">{children}</div>
      </div>
      <Footer/>
    </>
  );
};

export default React.memo(Layout);