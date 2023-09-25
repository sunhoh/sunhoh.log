import React from 'react';

interface IProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}
const LayoutFullpage = ({ left, right }: IProps) => {
  return (
    <section>
      <div className="flex border border-solid">
        <div className="w-full  border border-solid">{left}</div>
        <div className="md:hidden w-1/4 border border-solid ">{right}</div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
