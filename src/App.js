/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';
import ContactInfo from './components/ContactInfo';
import WorkExp from './components/WorkExp';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contactEditState: true,
      workExpEditState: false,
      educationEditState: false,
    };
  }

  toggleBtnState = () => {
    if (
      !this.state.contactEditState &&
      !this.state.workExpEditState &&
      !this.state.educationEditState
    ) {
      document.querySelector('#create-pdf-btn').style.opacity = 1;
    } else {
      document.querySelector('#create-pdf-btn').style.opacity = 0.25;
    }
  };

  setContactState = (status) => {
    this.setState(
      {
        contactEditState: status,
      },
      () => this.toggleBtnState()
    );
  };

  setWorkExpEditState = (status) => {
    this.setState(
      {
        workExpEditState: status,
      },
      () => this.toggleBtnState()
    );
  };

  setEducationEditState = (status) => {
    this.setState(
      {
        educationEditState: status,
      },
      () => this.toggleBtnState()
    );
  };

  createPDF = () => {
    if (
      !this.state.contactEditState &&
      !this.state.workExpEditState &&
      !this.state.educationEditState
    ) {
      const editIcon = document.querySelector('.edit-icon');
      const plusIcons = Array.from(document.querySelectorAll('.icon-wrapper'));

      editIcon.style.display = 'none';
      plusIcons.forEach((icon) => {
        icon.style.display = 'none';
      });

      const content = document.querySelector('#main-content');
      html2pdf().from(content).save('resume.pdf');

      editIcon.style.display = 'inline-block';
      plusIcons.forEach((icon) => {
        icon.style.display = 'block';
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="main-title">CV Builder</h1>
        <div id="main-content">
          <ContactInfo appEdit={this.setContactState} />
          <WorkExp appEdit={this.setWorkExpEditState} />
          <Education appEdit={this.setEducationEditState} />
        </div>
        <button id="create-pdf-btn" type="button" onClick={this.createPDF}>
          Create PDF
        </button>
      </div>
    );
  }
}

export default App;
