/* eslint-disable react/prop-types */
import React from 'react';

const HalfBox = (props) => {
  const { title, type, id, update, val } = props;

  return (
    <div className="half-box">
      <label htmlFor={id}>{title}</label>
      <input
        className="half-form form"
        type={type}
        id={id}
        value={val}
        onChange={update}
      />
    </div>
  );
};

export default HalfBox;
