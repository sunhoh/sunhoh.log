import React, { useState, useEffect } from 'react';
// import TocBanner from '';

const Sidebar = () => {
  const [offsetY, setOffsetY] = useState<number | undefined>(undefined);
  const sidebarRef: React.RefObject<HTMLDivElement> = React.createRef();

  // html id를 받아와서 뿌리고
  // id 클릭시 link로 이동

  return (
    <div className="mt-12 ml-auto">
      <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
        {/* <TocBanner tableOfContents={tableOfContents} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
