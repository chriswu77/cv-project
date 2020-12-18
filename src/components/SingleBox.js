/* eslint-disable react/prop-types */
import React from 'react';

const SingleBox = (props) => {
  const { title, type, id, update, val, err } = props;

  return (
    <div className="single-box">
      <label htmlFor={id}>{title}</label>
      <input
        className="single-form form"
        type={type}
        id={id}
        value={val}
        onChange={update}
      />
      <p className="form-error">{err}</p>
    </div>
  );
};

export default SingleBox;
