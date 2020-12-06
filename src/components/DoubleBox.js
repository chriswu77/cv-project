/* eslint-disable react/prop-types */
import React from 'react';
import HalfBox from './HalfBox';

const DoubleBox = (props) => {
  const { title1, type1, id1, title2, type2, id2 } = props;

  return (
    <div className="box-container">
      <HalfBox title={title1} type={type1} id={id1} />
      <HalfBox title={title2} type={type2} id={id2} />
    </div>
  );
};

export default DoubleBox;
