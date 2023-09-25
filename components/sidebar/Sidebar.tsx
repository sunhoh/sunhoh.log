import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [offsetY, setOffsetY] = useState<number | undefined>(undefined);
  const sidebarRef: React.RefObject<HTMLDivElement> = React.createRef();

  return (
    <div className="border border-solid h-40 w-40 rounded-lg fixed transition-all">
      <div>dadad</div>
      <div className="border border-solid w-full h-10 absolute bottom-0 bg-gray-300">footer</div>
    </div>
  );
};

export default Sidebar;
