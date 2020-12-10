import React, { Component } from 'react';
import '../style.css';
import ContactInfoForm from './ContactInfoForm';
import ContactInfoSubmitted from './ContactInfoSubmitted';

class ContactInfo extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      edit: true,
    };
  }

  updateFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  updateLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updatePhone = (phone) => {
    this.setState({
      phone: phone,
    });
  };

  updateAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  updateCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  updateState = (e) => {
    this.setState({
      state: e.target.value,
    });
  };

  updateZip = (e) => {
    this.setState({
      zip: e.target.value,
    });
  };

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({ edit: !prevState.edit }),
      () => console.log(this.state)
    );
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
    } = this.state;

    const { edit } = this.state;
    let contactInfo;
    if (edit) {
      contactInfo = (
        <ContactInfoForm
          updateFirstName={this.updateFirstName}
          updateLastName={this.updateLastName}
          updateEmail={this.updateEmail}
          updatePhone={this.updatePhone}
          updateAddress={this.updateAddress}
          updateCity={this.updateCity}
          updateState={this.updateState}
          updateZip={this.updateZip}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          address={address}
          city={city}
          state={state}
          zip={zip}
          submitData={this.toggleEdit}
        />
      );
    } else {
      contactInfo = (
        <ContactInfoSubmitted
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          address={address}
          city={city}
          state={state}
          zip={zip}
          toggleEdit={this.toggleEdit}
        />
      );
    }

    return <div className="contact-info-container">{contactInfo}</div>;
  }
}

export default ContactInfo;
