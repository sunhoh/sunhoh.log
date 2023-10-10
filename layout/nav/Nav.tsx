import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { DEFAULT_PATHS } from 'lib/config';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex w-full select-none items-end pt-8 pb-12">
      {/* home logo hidden sm:flex */}
      <div className="">
        <Link href={DEFAULT_PATHS.HOME}>
          <h1 className="text-3xl font-bold cursor-pointer">Blog</h1>
        </Link>
      </div>
      {/* sm bar */}
      {/* <div className="p-1 flex items-center cursor-pointer sm:hidden ">
        <CsLineIcons icon="bar" />
      </div> */}
      <div
        className="ml-2 p-1 rounded-lg hover:bg-neutral-100 dark:bg-neutral-800 cursor-pointer "
        onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
      </div>
    </nav>
  );
};

export default Nav;
