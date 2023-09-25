import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Footer = () => {
  return (
    <footer className="py-10 w-full m-auto lg:px-40 md:px-20 sm:px-8 transition-all max-w-screen-xl">
      <div className="flex flex-col items-end p-5 ">
        <Link href="https://github.com/sunhoh">
          <CsLineIcons icon="github" fill="#6b7480" stroke="0" />
        </Link>
        <span className="mt-3 font-serif font-normal text-sm">
          © 2023 sunhoh blog Powered by Next.js, vercel
        </span>
      </div>
    </footer>
  );
};

export default Footer;
