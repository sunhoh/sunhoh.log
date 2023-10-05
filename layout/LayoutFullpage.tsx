import React from 'react';

interface IProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}

const LayoutFullpage = ({ left, right }: IProps) => {
  return (
    <section>
      <div className="flex">
        <div className="w-full ">{left}</div>
        <div className="hidden sticky self-start min-w-[240px] max-w-[260px] lg:block border border-solid">
          {right}
        </div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
