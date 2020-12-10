/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import DateBox from './DateBox';
import Buttons from './Buttons';

// need two form versions
// version 1 - fresh form - eventlistener on + button - can use all the state.values when they're blank/reset. btns based on state.newStatus = true (change to state.createNewForm?)
// version 2 - edit form - eventlistener on pencil - pass in experiences array from state - access the data values for the specific experience - set the values to the stored values

const WorkExpForm = (props) => {
  const {
    updateTitle,
    title,
    updateCompany,
    company,
    updateLocation,
    location,
    fromMonth,
    updateFromMonth,
    fromYear,
    updateFromYear,
    toMonth,
    updateToMonth,
    toYear,
    updateToYear,
    description,
    updateDescription,
    isNew,
    addExp,
  } = props;

  return (
    <form className="edit-view">
      <div className="heading" id="work-exp-header">
        <h1>Work Experience</h1>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>
      <SingleBox
        title="Job Title"
        type="text"
        id="title"
        update={updateTitle}
        val={title}
      />
      <DoubleBox
        title1="Company / Organization"
        type1="text"
        id1="company"
        update1={updateCompany}
        val1={company}
        title2="Location"
        type2="text"
        id2="location"
        update2={updateLocation}
        val2={location}
      />
      <DateBox
        text="Leave blank if currently working here"
        fromMonth={fromMonth}
        updateFromMonth={updateFromMonth}
        fromYear={fromYear}
        updateFromYear={updateFromYear}
        toMonth={toMonth}
        updateToMonth={updateToMonth}
        toYear={toYear}
        updateToYear={updateToYear}
      />
      <div className="description-box">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          value={description}
          onChange={updateDescription}
        />
      </div>
      <Buttons newStatus={isNew} />
    </form>
  );
};

export default WorkExpForm;
