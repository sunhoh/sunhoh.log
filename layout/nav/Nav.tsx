import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { DEFAULT_PATHS } from 'lib/config';

const Nav = () => {
  return (
    <nav className="relative border-b border-solid border-gray-200">
      <Wrapper>
        <Link href={DEFAULT_PATHS.HOME}>
          <h1 className="text-3xl font-bold cursor-pointer">Blog</h1>
        </Link>
      </Wrapper>
    </nav>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: 1280px;
  transition: all 0.2s ease-in;
`;
