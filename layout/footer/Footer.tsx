import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Footer = () => {
  return (
    <footer className="mx-auto text-sm border-t text-neutral-800 dark:text-neutral-400">
      <div className="px-3 py-3 footer md:px-6">
        <span className="font-sans text-sm font-normal text-gray-500">
          {/* © 2023 sunhoh blog Powered by Next.js, vercel */}
          Shine, constantly and steadily.
        </span>
        <Link href="https://github.com/sunhoh">
          <CsLineIcons icon="github" fill="#6b7480" stroke="0" width={20} className="hover:brightness-150" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;