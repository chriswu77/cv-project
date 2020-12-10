/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import HalfBox from './HalfBox';

const DoubleBox = (props) => {
  const {
    title1,
    type1,
    id1,
    update1,
    val1,
    title2,
    type2,
    id2,
    update2,
    val2,
  } = props;

  let secondBox;

  if (type2 === 'tel') {
    secondBox = (
      <div className="half-box">
        <label htmlFor={id2}>{title2}</label>
        <PhoneInput country={'us'} value={val2} onChange={update2} />
      </div>
    );
  } else {
    secondBox = (
      <HalfBox
        title={title2}
        type={type2}
        id={id2}
        update={update2}
        val={val2}
      />
    );
  }

  return (
    <div className="box-container">
      <HalfBox
        title={title1}
        type={type1}
        id={id1}
        update={update1}
        val={val1}
      />
      {secondBox}
    </div>
  );
};

export default DoubleBox;
