import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import { TableOfContents } from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';
import { useRouter } from 'next/router';


interface IProps {
  toc?:TableOfContents
  children: React.ReactNode;
}

const LayoutGridpage = ({ children, toc }: IProps) => {
  const router = useRouter()

  return (
    <>
      {router.pathname.includes(DEFAULT_PATHS.BLOG) ? <Sidebar toc={toc}/> : <></>  }
      <main>{children}</main>
    </>
  );
};

export default LayoutGridpage;
