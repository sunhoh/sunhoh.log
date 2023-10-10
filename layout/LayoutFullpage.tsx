import React from 'react';

interface IProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}

const LayoutFullpage = ({ left, right }: IProps) => {
  return (
    <section>
      <div className="gap-8 lg:flex ">
        <div className="w-full border border-soild">{left}</div>
        <div className="border border-solid">{right}</div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
