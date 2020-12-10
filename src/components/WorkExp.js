/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../style.css';
import WorkExpForm from './WorkExpForm';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
      isNew: true,
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

  addExp = () => {
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
        isNew: true,
        experiences: prevState.experiences.concat(experience),
      }),
      console.log(this.state)
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
      isNew,
    } = this.state;

    return (
      <div className="work-exp-container">
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
          isNew={isNew}
          addExp={this.addExp}
        />
      </div>
    );
  }
}

export default WorkExp;
