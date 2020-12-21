/* eslint-disable react/prop-types */
import React from 'react';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import DateBox from './DateBox';
import Buttons from './Buttons';

const EducationForm = (props) => {
  const {
    updateSchool,
    school,
    updateDegree,
    degree,
    updateMajor,
    major,
    updateMinor,
    minor,
    updateFromMonth,
    fromMonth,
    updateFromYear,
    fromYear,
    updateToMonth,
    toMonth,
    updateToYear,
    toYear,
    edit,
    isNew,
    updateState,
    cancelForm,
    schoolError,
    degreeError,
    majorError,
    fromMonthError,
    fromYearError,
  } = props;

  let displayForm;

  if (isNew && edit) {
    displayForm = (
      <form className="edit-view" onSubmit={updateState}>
        <SingleBox
          title="School Name"
          type="text"
          id="school"
          update={updateSchool}
          val={school}
          err={schoolError}
        />
        <SingleBox
          title="Level of Education / Degree"
          type="text"
          id="degree"
          update={updateDegree}
          val={degree}
          err={degreeError}
        />
        <DoubleBox
          title1="Major"
          type1="text"
          id1="major"
          update1={updateMajor}
          val1={major}
          err1={majorError}
          title2="Minor"
          type2="text"
          id2="minor"
          update2={updateMinor}
          val2={minor}
        />
        <DateBox
          text="Or expected graduation date"
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
        <Buttons newStatus={isNew} cancel={cancelForm} />
      </form>
    );
  } else {
    displayForm = '';
  }

  return displayForm;
};

export default EducationForm;
