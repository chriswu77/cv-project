/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import './style.css';
import html2pdf from 'html2pdf.js';
import ContactInfo from './components/ContactInfo';
import WorkExp from './components/WorkExp';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editState: true,
    };
  }

  toggleEditOn = () => {
    this.setState(
      {
        editState: true,
      },
      () => console.log(this.state)
    );
  };

  toggleEditOff = () => {
    this.setState(
      {
        editState: false,
      },
      () => console.log(this.state)
    );
  };

  createPDF = () => {
    if (!this.state.editState) {
      const editIcon = document.querySelector('.edit-icon');
      const plusIcons = Array.from(document.querySelectorAll('.icon-wrapper'));

      editIcon.style.display = 'none';
      plusIcons.forEach((icon) => {
        icon.style.display = 'none';
      });

      const content = document.querySelector('#main-content');
      html2pdf().from(content).save();

      editIcon.style.display = 'inline-block';
      plusIcons.forEach((icon) => {
        icon.style.display = 'block';
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="main-content">
          <ContactInfo
            appEditOn={this.toggleEditOn}
            appEditOff={this.toggleEditOff}
          />
          <WorkExp
            appEditOn={this.toggleEditOn}
            appEditOff={this.toggleEditOff}
          />
          <Education
            appEditOn={this.toggleEditOn}
            appEditOff={this.toggleEditOff}
          />
        </div>
        <button id="create-pdf-btn" type="button" onClick={this.createPDF}>
          Create PDF
        </button>
      </div>
    );
  }
}

export default App;
