import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import { TableOfContents } from 'types/post'

interface IProps {
  toc?:TableOfContents
  children: React.ReactNode;
}

const LayoutGridpage = ({ children, toc }: IProps) => {
  return (
    <>
      <Sidebar toc={toc}/> 
      <main>{children}</main>
    </>
  );
};

export default LayoutGridpage;
