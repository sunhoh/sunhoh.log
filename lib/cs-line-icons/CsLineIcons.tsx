import React from 'react';
import svgs from './svgs';

interface ICsLineIcons {
  icon: string;
  className?: string;
  size?: number | null;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit' | undefined;
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
  viewBox?: any;
  xmlns?: string;
}

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
}: ICsLineIcons) => {
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
  return <></>;
};

export default React.memo(CsLineIcons);
