/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import WorkExpForm from './WorkExpForm';
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
      fromYear: 'YYYY',
      toMonth: '',
      toYear: 'YYYY',
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

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({ edit: !prevState.edit }),
      () => console.log(this.state)
    );
  };

  toggleNewForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      newForm: !prevState.newForm,
      edit: !prevState.edit,
    }));
  };

  addExp = (e) => {
    e.preventDefault();

    const experience = {
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

    this.setState(
      (prevState) => ({
        title: '',
        company: '',
        location: '',
        fromMonth: '',
        fromYear: 'YYYY',
        toMonth: '',
        toYear: 'YYYY',
        description: '',
        edit: false,
        newForm: false,
        experiences: prevState.experiences.concat(experience),
      }),
      () => console.log(this.state.experiences)
    );
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
          <FontAwesomeIcon
            icon={faPlus}
            className="plus-icon"
            onClick={this.toggleNewForm}
          />
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
        />
      </div>
    );
  }
}

export default WorkExp;
