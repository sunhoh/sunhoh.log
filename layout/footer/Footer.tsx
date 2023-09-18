import React from 'react';
import styled from '@emotion/styled';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Footer = () => {
  return (
    <footer className="w-full px-4 bg-gray-200">
      <Warpper>
        <span>© sunhoh.</span>
        <a href="https://github.com/sunhoh">
          <CsLineIcons icon="github" fill="#6b7480" stroke="0" />
        </a>
      </Warpper>
    </footer>
  );
};

export default Footer;

// #f4f4f4
const Warpper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
