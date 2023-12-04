import React from 'react';
import Footer from './footer/Footer';
import { useRouter } from 'next/router';
import { DEFAULT_PATHS } from 'lib/config';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  
  return (
    <>
    {/*  */}
      <div className="mx-auto max-w-page py-page">
        {router.pathname !== DEFAULT_PATHS.NOTFOUND
          ? <div className="mx-auto main-grid md:flex md:flex-col md:items-center ">{children}</div> 
          : <div>{children}</div> 
          }
      </div>
      <Footer/>
    </>
  );
};

export default React.memo(Layout);