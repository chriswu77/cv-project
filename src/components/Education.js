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
import EducationForm from './EducationForm';
import RenderEdu from './RenderEdu';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: '',
      degree: '',
      major: '',
      minor: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      edit: false,
      newForm: false,
      educations: [],
    };
  }

  updateSchool = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  updateDegree = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  updateMajor = (e) => {
    this.setState({
      major: e.target.value,
    });
  };

  updateMinor = (e) => {
    this.setState({
      minor: e.target.value,
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

  resetStateVals = () => {
    this.setState({
      school: '',
      degree: '',
      major: '',
      minor: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      edit: false,
      newForm: false,
    });
  };

  toggleEditState = (e) => {
    const icon = e.target.closest('.icon-wrapper');
    if (icon) {
      const id = icon.parentElement.parentElement.id;
      const copyArr = [...this.state.educations];
      const index = copyArr.findIndex((edu) => edu.id === id);
      const selectedEdu = copyArr[index];
      selectedEdu.editState = true;

      this.setState(
        (prevState) => ({ edit: !prevState.edit, educations: copyArr }),
        () => console.log(this.state)
      );

      this.updateStateVals(selectedEdu);
      this.disableBtns();
    }
  };

  cancelEdit = (id) => {
    const copyArr = [...this.state.educations];
    const index = copyArr.findIndex((edu) => edu.id === id);
    const selectedEdu = copyArr[index];
    selectedEdu.editState = false;

    this.resetStateVals();
    this.setState({ educations: copyArr });
    this.enableBtns();
  };

  deleteEdu = (id) => {
    this.resetStateVals();
    this.setState({
      educations: this.state.educations.filter((edu) => edu.id !== id),
    });
    this.enableBtns();
  };

  submitEditChanges = (e, id) => {
    e.preventDefault();
    const copyArr = [...this.state.educations];
    const index = copyArr.findIndex((edu) => edu.id === id);
    const selectedEdu = copyArr[index];

    selectedEdu.school = this.state.school;
    selectedEdu.degree = this.state.degree;
    selectedEdu.major = this.state.major;
    selectedEdu.minor = this.state.minor;
    selectedEdu.fromMonth = this.state.fromMonth;
    selectedEdu.fromYear = this.state.fromYear;
    selectedEdu.toMonth = this.state.toMonth;
    selectedEdu.toYear = this.state.toYear;
    selectedEdu.editState = false;

    this.resetStateVals();
    this.setState({ educations: copyArr });
    this.enableBtns();
  };

  toggleNewForm = () => {
    this.setState((prevState) => ({
      newForm: !prevState.newForm,
      edit: !prevState.edit,
    }));

    this.disableBtns();
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
  };

  addEdu = (e) => {
    e.preventDefault();

    const education = {
      id: uniqid(),
      school: this.state.school,
      degree: this.state.degree,
      major: this.state.major,
      minor: this.state.minor,
      fromMonth: this.state.fromMonth,
      fromYear: this.state.fromYear,
      toMonth: this.state.toMonth,
      toYear: this.state.toYear,
      editState: false,
    };

    this.cancelNewform();

    const copy = [...this.state.educations];
    copy.unshift(education);

    this.setState({
      educations: copy,
    });
  };

  updateStateVals = (edu) => {
    this.setState({
      school: edu.school,
      degree: edu.degree,
      major: edu.major,
      minor: edu.minor,
      fromMonth: edu.fromMonth,
      fromYear: edu.fromYear,
      toMonth: edu.toMonth,
      toYear: edu.toYear,
    });
  };

  render() {
    const {
      school,
      degree,
      major,
      minor,
      fromMonth,
      fromYear,
      toMonth,
      toYear,
      edit,
      newForm,
      educations,
    } = this.state;

    return (
      <div className="work-exp-container">
        <div className="heading" id="work-exp-header">
          <h1>Education</h1>
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faPlus}
              className="plus-icon"
              onClick={this.toggleNewForm}
            />
          </div>
        </div>
        <EducationForm
          updateSchool={this.updateSchool}
          school={school}
          updateDegree={this.updateDegree}
          degree={degree}
          updateMajor={this.updateMajor}
          major={major}
          updateMinor={this.updateMinor}
          minor={minor}
          updateFromMonth={this.updateFromMonth}
          fromMonth={fromMonth}
          updateFromYear={this.updateFromYear}
          fromYear={fromYear}
          updateToMonth={this.updateToMonth}
          toMonth={toMonth}
          updateToYear={this.updateToYear}
          toYear={toYear}
          edit={edit}
          isNew={newForm}
          updateState={this.addEdu}
          cancelForm={this.cancelNewform}
        />
        <RenderEdu
          educations={educations}
          toggleEditState={this.toggleEditState}
          updateSchool={this.updateSchool}
          school={school}
          updateDegree={this.updateDegree}
          degree={degree}
          updateMajor={this.updateMajor}
          major={major}
          updateMinor={this.updateMinor}
          minor={minor}
          updateFromMonth={this.updateFromMonth}
          fromMonth={fromMonth}
          updateFromYear={this.updateFromYear}
          fromYear={fromYear}
          updateToMonth={this.updateToMonth}
          toMonth={toMonth}
          updateToYear={this.updateToYear}
          toYear={toYear}
          updateState={this.submitEditChanges}
          cancelForm={this.cancelEdit}
          deleteEdu={this.deleteEdu}
        />
      </div>
    );
  }
}

export default Education;
