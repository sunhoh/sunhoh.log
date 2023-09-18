import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { DEFAULT_PATHS } from 'lib/config';

const Nav = () => {
  return (
    <nav className="border-b border-solid border-gray-200">
      <Wrapper>
        <Link href={DEFAULT_PATHS.HOME}>
          <h1 className="text-3xl font-bold cursor-pointer">Blog</h1>
        </Link>

        {/* <ul className="flex text-2xl">
          {['about', 'study'].map((e, index) => (
            <li key={index} className="border-solid border p-2 cursor-pointer">
              {e}
            </li>
          ))}
        </ul> */}
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

  ${({ theme: { media } }) => media.lg(`padding: 10px 32px;`)};
  ${({ theme: { media } }) => media.md(`padding: 10px 32px;`)};
  ${({ theme: { media } }) => media.sm(`padding: 10px 24px;`)};
`;
