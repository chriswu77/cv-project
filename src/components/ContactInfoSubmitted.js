/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ContactInfoSubmitted = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    toggleEdit,
  } = props;

  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${address}, ${city}, ${state} ${zip}`;

  return (
    <div className="submitted-view">
      <div className="header">
        <h1 className="heading">Contact Information</h1>
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={toggleEdit}
        />
      </div>
      <p className="submitted-line name">{fullName}</p>
      <p className="submitted-line">{email}</p>
      <p className="submitted-line">{phone}</p>
      <p className="submitted-line">{fullAddress}</p>
    </div>
  );
};

export default ContactInfoSubmitted;
