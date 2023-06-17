/* eslint-disable react/no-danger */
import React from 'react';
import svgs from './svgs';

const CsLineIcons = ({
  icon = '',
  className = '',
  size = null,
  width = 24,
  height = 24,
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 1.5,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  viewBox = '0 0 24 24',
  xmlns = 'http://www.w3.org/2000/svg',
}) => {
  if (svgs[icon]) {
    if (size) {
      width = size;
      height = size;
    }

    return (
      <svg
        xmlns={xmlns}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        className={`cs-icon ${icon} ${className}`}
        dangerouslySetInnerHTML={{ __html: svgs[icon] }}
      />
    );
  }
  console.log(`CsLineIcons -> [${icon}] icon is not defined.`);
  return <></>;
};

export default React.memo(CsLineIcons);
