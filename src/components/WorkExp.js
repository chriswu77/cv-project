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
// import DoubleBox from './DoubleBox';
// import SingleBox from './SingleBox';
// import DateBox from './DateBox';
// import Buttons from './Buttons';

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
      edit: false,
      // isNew: true,
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

  toggleEditState = (e) => {
    const icon = e.target.closest('.exp-pencil');
    if (icon) {
      const id = icon.parentElement.parentElement.id;
      const copyArr = [...this.state.experiences];
      const index = copyArr.findIndex((exp) => exp.id === id);
      const selectedExp = copyArr[index];
      selectedExp.editState = true;

      this.setState(
        (prevState) => ({ edit: !prevState.edit, experiences: copyArr }),
        () => console.log(this.state)
      );

      this.updateStateVals(selectedExp);
    }
  };

  submitEditChanges = (e, id) => {
    e.preventDefault();
    const copyArr = [...this.state.experiences];
    const index = copyArr.findIndex((exp) => exp.id === id);
    const selectedExp = copyArr[index];

    console.log(id);

    selectedExp.title = this.state.title;
    selectedExp.company = this.state.company;
    selectedExp.location = this.state.location;
    selectedExp.fromMonth = this.state.fromMonth;
    selectedExp.fromYear = this.state.fromYear;
    selectedExp.toMonth = this.state.toMonth;
    selectedExp.toYear = this.state.toYear;
    selectedExp.description = this.state.description;
    selectedExp.editState = false;

    this.setState(
      (prevState) => ({ edit: !prevState.edit, experiences: copyArr }),
      () => console.log(this.state)
    );
  };

  toggleNewForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      newForm: !prevState.newForm,
      edit: !prevState.edit,
    }));

    this.disableBtns();
  };

  disableBtns = () => {
    document.querySelector('.icon-wrapper').classList.add('disable-cursor');
    document.querySelector('.plus-icon').classList.add('disable');
  };

  enableBtns = () => {
    document.querySelector('.icon-wrapper').classList.remove('disable-cursor');
    document.querySelector('.plus-icon').classList.remove('disable');
  };

  cancelNewform = () => {
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

    this.enableBtns();
  };

  addExp = (e) => {
    e.preventDefault();

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

    this.setState(
      (prevState) => ({
        experiences: prevState.experiences.concat(experience),
      }),
      () => console.log(this.state)
    );
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
        {/* 
        1. add New Work Exp Form component on the top - disable the Add button and the other edit pencil buttons
        2. add Display Submitted Experiences Component under - loop through the experiences array - assign an editState component to each experience - 
        3. when submitted task's edit pencil is clicked 
        - toggle the task's editState 
        - display Edit Work Exp Form for that task 
        - also disable the Add New Exp button and other Exp Edit Pencils
        - the array loop should render itself
        */}
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
          // edit={edit}
          // isNew={newForm}
          updateState={this.submitEditChanges}
          cancelForm={this.cancelNewform}
        />
      </div>
    );
  }
}

export default WorkExp;
