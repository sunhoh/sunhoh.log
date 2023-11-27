import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Footer = () => {
  return (
    <footer className="text-sm border-t px-page text-neutral-800 dark:text-neutral-400">
      <div className="flex items-end justify-between px-16 py-3">
        <span className="font-serif text-sm font-normal ">
          © 2023 sunhoh blog Powered by Next.js, vercel
        </span>
        <Link href="https://github.com/sunhoh">
          <CsLineIcons icon="github" fill="#6b7480" stroke="0" width={20} className="hover:brightness-150" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
