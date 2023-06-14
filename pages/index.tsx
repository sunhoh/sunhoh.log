import Image from 'next/image';
import Helmet from 'components/html-head/Helmet';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <Helmet title="달달" description="달달 main" image="" url="" />
      <div>
        <Test props={true}>post</Test>
      </div>
    </>
  );
}

const Test = styled.div<{ props: boolean }>`
  padding: 2px;
  border: 3px solid transparent;
  ${({ props, theme }) =>
    props &&
    css`
      padding: 12px;
      border: 1px solid red;
    `}
`;
