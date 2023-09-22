import React from 'react';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Footer = () => {
  return (
    <footer className="mt-10 w-full ">
      <div className="flex flex-col items-end  border border-solid p-5">
        <a href="https://github.com/sunhoh">
          <CsLineIcons icon="github" fill="#6b7480" stroke="0" />
        </a>
        <span>© 2023 sunhoh blog Powered by Next.js, Github Pages</span>
      </div>
    </footer>
  );
};

export default Footer;
