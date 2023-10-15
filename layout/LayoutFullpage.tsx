import React from 'react';

interface IProps {
  constents: React.ReactNode;
}

const LayoutFullpage = ({ constents }: IProps) => {
  return (
    <section>
      <div>
        <div className="w-full">{constents}</div>
      </div>
    </section>
  );
};

export default LayoutFullpage;
