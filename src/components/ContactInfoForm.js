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
    firstNameError,
    lastNameError,
    emailError,
    phoneError,
    addressError,
    cityError,
    stateError,
    zipError,
  } = props;

  return (
    <form className="edit-view" onSubmit={submitData}>
      <h1 className="heading heading-text">Contact Information</h1>
      <DoubleBox
        title1="First Name"
        type1="text"
        id1="firstName"
        update1={updateFirstName}
        val1={firstName}
        err1={firstNameError}
        title2="Last Name"
        type2="text"
        id2="lastName"
        update2={updateLastName}
        val2={lastName}
        err2={lastNameError}
      />
      <DoubleBox
        title1="Email"
        type1="email"
        id1="email"
        update1={updateEmail}
        val1={email}
        err1={emailError}
        title2="Phone"
        type2="tel"
        id2="phone"
        update2={updatePhone}
        val2={phone}
        err2={phoneError}
      />
      <SingleBox
        title="Address"
        type="text"
        id="address"
        update={updateAddress}
        val={address}
        err={addressError}
      />
      <div className="box-container">
        <HalfBox
          title="City"
          type="text"
          id="city"
          update={updateCity}
          val={city}
          err={cityError}
        />
        <HalfBox
          title="State"
          type="text"
          id="state"
          update={updateState}
          val={state}
          err={stateError}
        />
        <HalfBox
          title="Zip Code"
          type="text"
          id="zip"
          update={updateZip}
          val={zip}
          err={zipError}
        />
      </div>
      <div className="btn-container-1">
        <button className="save-btn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactInfoForm;
