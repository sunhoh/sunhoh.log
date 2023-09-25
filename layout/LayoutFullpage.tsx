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
        {/* <div className="md:hidden w-1/4 border border-solid ">{right}</div> */}
      </div>
    </section>
  );
};

export default LayoutFullpage;
