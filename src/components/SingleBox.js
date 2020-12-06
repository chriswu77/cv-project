/* eslint-disable react/prop-types */
import React from 'react';

const SingleBox = (props) => {
  const { title, type, id } = props;

  return (
    <div className="single-box">
      <label htmlFor={id}>{title}</label>
      <input className="single-form form" type={type} id={id} />
    </div>
  );
};

export default SingleBox;
