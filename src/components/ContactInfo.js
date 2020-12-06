import React, { Component } from 'react';
import '../style.css';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import HalfBox from './HalfBox';

class ContactInfo extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  updateFirstName = (e) => {
    console.log('pogchamp');
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      address,
      city,
      state,
      zip,
    } = this.state;

    return (
      <div className="contact-info-container">
        <form className="edit-view">
          <h1 className="heading">Contact Information</h1>
          <DoubleBox
            title1="First Name"
            type1="text"
            id1="firstName"
            title2="Last Name"
            type2="text"
            id2="lastName"
          />
          <DoubleBox
            title1="Email"
            type1="email"
            id1="email"
            title2="Phone"
            type2="text"
            id2="phone"
          />
          <SingleBox title="Address" type="text" id="address" />
          <div className="box-container">
            <HalfBox title="City" type="text" id="city" />
            <HalfBox title="State" type="text" id="state" />
            <HalfBox title="Zip Code" type="text" id="zip" />
          </div>
          <div className="btn-container-1">
            <button className="save-btn" type="submit">
              Save
            </button>
            <button className="cancel-btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactInfo;
