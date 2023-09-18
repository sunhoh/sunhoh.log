import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import styled from '@emotion/styled';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Nav />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default React.memo(Layout);

const Container = styled.div`
  border: 1px solid black;
`;
