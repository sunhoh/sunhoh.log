import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import styled from '@emotion/styled';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MediaComponent>
      <Nav />
      <main>{children}</main>
      <Footer />
    </MediaComponent>
  );
};

export default React.memo(Layout);

const MediaComponent = styled.div`
  border: 1px solid green;
  position: relative;
  height: 100vh;
  width: 80%;
  margin: auto;
`;
