/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import HalfBox from './HalfBox';

const ContactInfoForm = (props) => {
  const {
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhone,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    submitData,
  } = props;

  return (
    <form className="edit-view" onSubmit={submitData}>
      <h1 className="heading">Contact Information</h1>
      <DoubleBox
        title1="First Name"
        type1="text"
        id1="firstName"
        update1={updateFirstName}
        val1={firstName}
        title2="Last Name"
        type2="text"
        id2="lastName"
        update2={updateLastName}
        val2={lastName}
      />
      <DoubleBox
        title1="Email"
        type1="email"
        id1="email"
        update1={updateEmail}
        val1={email}
        title2="Phone"
        type2="tel"
        id2="phone"
        update2={updatePhone}
        val2={phone}
      />
      <SingleBox
        title="Address"
        type="text"
        id="address"
        update={updateAddress}
        val={address}
      />
      <div className="box-container">
        <HalfBox
          title="City"
          type="text"
          id="city"
          update={updateCity}
          val={city}
        />
        <HalfBox
          title="State"
          type="text"
          id="state"
          update={updateState}
          val={state}
        />
        <HalfBox
          title="Zip Code"
          type="text"
          id="zip"
          update={updateZip}
          val={zip}
        />
      </div>
      <div className="btn-container-1">
        <button className="save-btn" type="submit">
          Save
        </button>
        {/* <button className="cancel-btn" type="button">
          Cancel
        </button> */}
      </div>
    </form>
  );
};

export default ContactInfoForm;
