import React from 'react';

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
}
const LayoutFullpage = ({ left, right }: IProps) => {
  return (
    <section className="">
      <div className="">
        <div className="">{left}</div>
        <div className="">{right}</div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
