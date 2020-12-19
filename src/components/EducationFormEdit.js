/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';
import DoubleBox from './DoubleBox';
import SingleBox from './SingleBox';
import DateBox from './DateBox';
import Buttons from './Buttons';

const EducationFormEdit = (props) => {
  const {
    edu,
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
    updateState,
    cancelForm,
    deleteEdu,
    schoolError,
    degreeError,
    majorError,
    fromMonthError,
    fromYearError,
  } = props;

  return (
    <form className="edit-view" onSubmit={(e) => updateState(e, edu.id)}>
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
      <Buttons
        newStatus={false}
        cancel={cancelForm}
        id={edu.id}
        deleteExp={deleteEdu}
      />
    </form>
  );
};

export default EducationFormEdit;
