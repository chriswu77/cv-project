/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import WorkExpForm from './WorkExpForm';
import RenderExps from './RenderExps';

class WorkExp extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      company: '',
      location: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      description: '',
      titleError: '',
      companyError: '',
      locationError: '',
      fromMonthError: '',
      fromYearError: '',
      edit: false,
      newForm: false,
      experiences: [],
    };
  }

  updateTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  updateCompany = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  updateLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  updateFromMonth = (e) => {
    this.setState({
      fromMonth: e.target.value,
    });
  };

  updateFromYear = (e) => {
    this.setState({
      fromYear: e.target.value,
    });
  };

  updateToMonth = (e) => {
    this.setState({
      toMonth: e.target.value,
    });
  };

  updateToYear = (e) => {
    this.setState({
      toYear: e.target.value,
    });
  };

  updateDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  resetStateVals = () => {
    this.setState({
      title: '',
      company: '',
      location: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      description: '',
      edit: false,
      newForm: false,
    });
  };

  toggleEditState = (e) => {
    const icon = e.target.closest('.icon-wrapper');
    if (icon) {
      const id = icon.parentElement.parentElement.id;
      const copyArr = [...this.state.experiences];
      const index = copyArr.findIndex((exp) => exp.id === id);
      const selectedExp = copyArr[index];
      selectedExp.editState = true;

      this.setState((prevState) => ({
        edit: !prevState.edit,
        experiences: copyArr,
      }));

      this.updateStateVals(selectedExp);
      this.disableBtns();
      this.props.appEditOn();
    }
  };

  cancelEdit = (id) => {
    const copyArr = [...this.state.experiences];
    const index = copyArr.findIndex((exp) => exp.id === id);
    const selectedExp = copyArr[index];
    selectedExp.editState = false;

    this.resetStateVals();
    this.setState({ experiences: copyArr });
    this.enableBtns();
    this.resetErrors();
    this.props.appEditOff();
  };

  deleteExp = (id) => {
    this.resetStateVals();
    this.setState({
      experiences: this.state.experiences.filter((exp) => exp.id !== id),
    });
    this.enableBtns();
    this.resetErrors();
    this.props.appEditOff();
  };

  submitEditChanges = (e, id) => {
    e.preventDefault();

    const isValid = this.validateForm();

    if (isValid) {
      const copyArr = [...this.state.experiences];
      const index = copyArr.findIndex((exp) => exp.id === id);
      const selectedExp = copyArr[index];

      selectedExp.title = this.state.title;
      selectedExp.company = this.state.company;
      selectedExp.location = this.state.location;
      selectedExp.fromMonth = this.state.fromMonth;
      selectedExp.fromYear = this.state.fromYear;
      selectedExp.toMonth = this.state.toMonth;
      selectedExp.toYear = this.state.toYear;
      selectedExp.description = this.state.description;
      selectedExp.editState = false;

      this.resetStateVals();
      this.setState({ experiences: copyArr });
      this.enableBtns();
      this.resetErrors();
      this.props.appEditOff();
    }
  };

  toggleNewForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      newForm: !prevState.newForm,
      edit: !prevState.edit,
    }));

    this.disableBtns();
    this.props.appEditOn();
  };

  disableBtns = () => {
    const cursorWrappers = Array.from(
      document.querySelectorAll('.icon-wrapper')
    );
    cursorWrappers.forEach((wrapper) =>
      wrapper.classList.add('disable-cursor')
    );

    const addIcons = Array.from(document.querySelectorAll('.plus-icon'));
    addIcons.forEach((plus) => plus.classList.add('disable'));

    const editPencils = Array.from(document.querySelectorAll('.exp-pencil'));
    editPencils.forEach((pencil) => pencil.classList.add('disable'));
  };

  enableBtns = () => {
    const cursorWrappers = Array.from(
      document.querySelectorAll('.icon-wrapper')
    );
    cursorWrappers.forEach((wrapper) =>
      wrapper.classList.remove('disable-cursor')
    );

    const addIcons = Array.from(document.querySelectorAll('.plus-icon'));
    addIcons.forEach((plus) => plus.classList.remove('disable'));

    const editPencils = Array.from(document.querySelectorAll('.exp-pencil'));
    editPencils.forEach((pencil) => pencil.classList.remove('disable'));
  };

  cancelNewform = () => {
    this.resetStateVals();

    this.setState({ newForm: false });

    this.enableBtns();
    this.resetErrors();
    this.props.appEditOff();
  };

  addExp = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      const experience = {
        id: uniqid(),
        title: this.state.title,
        company: this.state.company,
        location: this.state.location,
        fromMonth: this.state.fromMonth,
        fromYear: this.state.fromYear,
        toMonth: this.state.toMonth,
        toYear: this.state.toYear,
        description: this.state.description,
        editState: false,
      };

      this.cancelNewform();

      const copy = [...this.state.experiences];
      copy.unshift(experience);

      this.setState({
        experiences: copy,
      });
    }
  };

  updateStateVals = (exp) => {
    this.setState({
      title: exp.title,
      company: exp.company,
      location: exp.location,
      fromMonth: exp.fromMonth,
      fromYear: exp.fromYear,
      toMonth: exp.toMonth,
      toYear: exp.toYear,
      description: exp.description,
    });
  };

  validateForm = () => {
    let titleError = '';
    let companyError = '';
    let locationError = '';
    let fromMonthError = '';
    let fromYearError = '';

    const requiredText = 'This field is required';

    if (this.state.title === '') {
      titleError = requiredText;
      this.setState({ titleError });
      document.querySelector('#title').classList.add('invalid');
      return false;
    }

    if (this.state.company === '') {
      companyError = requiredText;
      this.setState({ companyError });
      document.querySelector('#company').classList.add('invalid');
      return false;
    }

    if (this.state.location === '') {
      locationError = requiredText;
      this.setState({ locationError });
      document.querySelector('#location').classList.add('invalid');
      return false;
    }

    if (this.state.fromMonth === '') {
      fromMonthError = 'required';
      this.setState({ fromMonthError });
      document.querySelector('#from-month-dropdown').classList.add('invalid');
      return false;
    }

    if (this.state.fromYear === '') {
      fromYearError = 'required';
      this.setState({ fromYearError });
      document.querySelector('#from-year').classList.add('invalid');
      return false;
    }

    return true;
  };

  resetErrors = () => {
    this.setState({
      titleError: '',
      companyError: '',
      locationError: '',
      fromMonthError: '',
      fromYearError: '',
    });

    document.querySelector('#title').classList.remove('invalid');
    document.querySelector('#company').classList.remove('invalid');
    document.querySelector('#location').classList.remove('invalid');
    document.querySelector('#from-month-dropdown').classList.remove('invalid');
    document.querySelector('#from-year').classList.remove('invalid');
  };

  render() {
    const {
      title,
      company,
      location,
      fromMonth,
      fromYear,
      toMonth,
      toYear,
      description,
      titleError,
      companyError,
      locationError,
      fromMonthError,
      fromYearError,
      edit,
      newForm,
      experiences,
    } = this.state;

    return (
      <div className="work-exp-container">
        <div className="heading" id="work-exp-header">
          <h1>Work Experience</h1>
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faPlus}
              className="plus-icon"
              onClick={this.toggleNewForm}
            />
          </div>
        </div>
        <WorkExpForm
          updateTitle={this.updateTitle}
          title={title}
          updateCompany={this.updateCompany}
          company={company}
          updateLocation={this.updateLocation}
          location={location}
          fromMonth={fromMonth}
          updateFromMonth={this.updateFromMonth}
          fromYear={fromYear}
          updateFromYear={this.updateFromYear}
          toMonth={toMonth}
          updateToMonth={this.updateToMonth}
          toYear={toYear}
          updateToYear={this.updateToYear}
          description={description}
          updateDescription={this.updateDescription}
          edit={edit}
          isNew={newForm}
          updateState={this.addExp}
          cancelForm={this.cancelNewform}
          titleError={titleError}
          companyError={companyError}
          locationError={locationError}
          fromMonthError={fromMonthError}
          fromYearError={fromYearError}
        />
        <RenderExps
          experiences={experiences}
          toggleEditState={this.toggleEditState}
          updateTitle={this.updateTitle}
          title={title}
          updateCompany={this.updateCompany}
          company={company}
          updateLocation={this.updateLocation}
          location={location}
          fromMonth={fromMonth}
          updateFromMonth={this.updateFromMonth}
          fromYear={fromYear}
          updateFromYear={this.updateFromYear}
          toMonth={toMonth}
          updateToMonth={this.updateToMonth}
          toYear={toYear}
          updateToYear={this.updateToYear}
          description={description}
          updateDescription={this.updateDescription}
          updateState={this.submitEditChanges}
          cancelForm={this.cancelEdit}
          deleteExp={this.deleteExp}
          titleError={titleError}
          companyError={companyError}
          locationError={locationError}
          fromMonthError={fromMonthError}
          fromYearError={fromYearError}
        />
      </div>
    );
  }
}

export default WorkExp;
