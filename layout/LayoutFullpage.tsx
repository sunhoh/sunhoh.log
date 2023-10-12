import React from 'react';

interface IProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}

const LayoutFullpage = ({ left, right }: IProps) => {
  return (
    <section>
      <div>
        <div className="w-full">{left}</div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
