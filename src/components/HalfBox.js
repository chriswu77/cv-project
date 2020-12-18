/* eslint-disable react/prop-types */
import React from 'react';

const HalfBox = (props) => {
  const { title, type, id, update, val, err } = props;

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
      <p className="form-error">{err}</p>
    </div>
  );
};

export default HalfBox;
