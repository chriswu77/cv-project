/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import DateBox from './DateBox';
import Buttons from './Buttons';

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
    edit,
    isNew,
    updateState,
    cancelForm,
    titleError,
    companyError,
    locationError,
    fromMonthError,
    fromYearError,
  } = props;

  let displayForm;

  if (isNew && edit) {
    displayForm = (
      <form className="edit-view" onSubmit={updateState}>
        <SingleBox
          title="Job Title"
          type="text"
          id="title"
          update={updateTitle}
          val={title}
          err={titleError}
        />
        <DoubleBox
          title1="Company / Organization"
          type1="text"
          id1="company"
          update1={updateCompany}
          val1={company}
          err1={companyError}
          title2="Location"
          type2="text"
          id2="location"
          update2={updateLocation}
          val2={location}
          err2={locationError}
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
          fromMonthError={fromMonthError}
          fromYearError={fromYearError}
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
        <Buttons newStatus={isNew} cancel={cancelForm} />
      </form>
    );
  } else {
    displayForm = '';
  }

  return displayForm;
};

export default WorkExpForm;
