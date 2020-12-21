/* eslint-disable react/prop-types */
import React from 'react';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import DateBox from './DateBox';
import Buttons from './Buttons';

const WorkExpFormEdit = (props) => {
  const {
    exp,
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
    updateState,
    cancelForm,
    deleteExp,
    titleError,
    companyError,
    locationError,
    fromMonthError,
    fromYearError,
  } = props;

  return (
    <form className="edit-view" onSubmit={(e) => updateState(e, exp.id)}>
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
      <Buttons
        newStatus={false}
        cancel={cancelForm}
        id={exp.id}
        deleteExp={deleteExp}
      />
    </form>
  );
};

export default WorkExpFormEdit;
