/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
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
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      phoneError: '',
      addressError: '',
      cityError: '',
      stateError: '',
      zipError: '',
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

  submitForm = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      this.resetErrors();
      this.setState((prevState) => ({ edit: !prevState.edit }));
    }
  };

  openForm = () => {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  };

  resetErrors = () => {
    this.setState({
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      phoneError: '',
      addressError: '',
      cityError: '',
      stateError: '',
      zipError: '',
    });

    document.querySelector('#firstName').classList.remove('invalid');
    document.querySelector('#lastName').classList.remove('invalid');
    document.querySelector('#email').classList.remove('invalid');
    document.querySelector('.form-control').classList.remove('invalid');
    document.querySelector('#address').classList.remove('invalid');
    document.querySelector('#city').classList.remove('invalid');
    document.querySelector('#state').classList.remove('invalid');
    document.querySelector('#zip').classList.remove('invalid');
  };

  validateForm = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let phoneError = '';
    let addressError = '';
    let cityError = '';
    let stateError = '';
    let zipError = '';

    const requiredText = 'This field is required';

    if (this.state.firstName === '') {
      firstNameError = requiredText;
      this.setState({ firstNameError });
      document.querySelector('#firstName').classList.add('invalid');
      return false;
    }

    if (this.state.lastName === '') {
      lastNameError = requiredText;
      this.setState({ lastNameError });
      document.querySelector('#lastName').classList.add('invalid');
      return false;
    }

    if (this.state.email === '') {
      emailError = requiredText;
      this.setState({ emailError });
      document.querySelector('#email').classList.add('invalid');
      return false;
    }

    if (this.state.phone === '') {
      phoneError = requiredText;
      this.setState({ phoneError });
      document.querySelector('.form-control').classList.add('invalid');
      return false;
    }

    if (this.state.address === '') {
      addressError = requiredText;
      this.setState({ addressError });
      document.querySelector('#address').classList.add('invalid');
      return false;
    }

    if (this.state.city === '') {
      cityError = requiredText;
      this.setState({ cityError });
      document.querySelector('#city').classList.add('invalid');
      return false;
    }

    if (this.state.state === '') {
      stateError = requiredText;
      this.setState({ stateError });
      document.querySelector('#state').classList.add('invalid');
      return false;
    }

    if (this.state.zip === '') {
      zipError = requiredText;
      this.setState({ zipError });
      document.querySelector('#zip').classList.add('invalid');
      return false;
    }

    return true;
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
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
      addressError,
      cityError,
      stateError,
      zipError,
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
          submitData={this.submitForm}
          firstNameError={firstNameError}
          lastNameError={lastNameError}
          emailError={emailError}
          phoneError={phoneError}
          addressError={addressError}
          cityError={cityError}
          stateError={stateError}
          zipError={zipError}
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
          toggleEdit={this.openForm}
        />
      );
    }

    return <div className="contact-info-container">{contactInfo}</div>;
  }
}

export default ContactInfo;
