import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { theme } from 'lib/store';

const Nav = () => {
  const [theme, setTheme] = React.useState('light');

  const ThemeIcon = React.useCallback(() => {
    if (theme === 'light') return <CsLineIcons icon="sun" />;
    if (theme === 'dark') return <CsLineIcons icon="moon" />;
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>logo</div>
      <div>about</div>
    </nav>
  );
};

export default Nav;
