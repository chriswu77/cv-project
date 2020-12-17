/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EducationFormEdit from './EducationFormEdit';

const RenderEdu = (props) => {
  const {
    educations,
    toggleEditState,
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
  } = props;

  const checkEnd = (month, year) => {
    if (month === '' || year === '') {
      return 'Current';
    }
    return `${month} ${year}`;
  };

  const checkMinor = (minorr) => {
    if (minorr !== '') {
      return `, Minor in ${minorr}`;
    }
    return '';
  };

  return (
    <div>
      {educations.map((edu) => {
        const degAndMajor = `${edu.degree}, ${edu.major}${checkMinor(
          edu.minor
        )}`;
        const duration = `${edu.fromMonth} ${edu.fromYear} - ${checkEnd(
          edu.toMonth,
          edu.toYear
        )}`;
        if (edu.editState) {
          return (
            <EducationFormEdit
              edu={edu}
              updateSchool={updateSchool}
              school={school}
              updateDegree={updateDegree}
              degree={degree}
              updateMajor={updateMajor}
              major={major}
              updateMinor={updateMinor}
              minor={minor}
              updateFromMonth={updateFromMonth}
              fromMonth={fromMonth}
              updateFromYear={updateFromYear}
              fromYear={fromYear}
              updateToMonth={updateToMonth}
              toMonth={toMonth}
              updateToYear={updateToYear}
              toYear={toYear}
              updateState={updateState}
              cancelForm={cancelForm}
              deleteEdu={deleteEdu}
              key={edu.id}
            />
          );
        }
        return (
          <div key={edu.id} id={edu.id} className="exp-container">
            <div className="exp-header-container">
              <p className="exp-title submitted-line">{edu.school}</p>
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="exp-pencil submitted-line"
                  onClick={toggleEditState}
                />
              </div>
            </div>
            <p className="submitted-line">{degAndMajor}</p>
            <p className="submitted-line">{duration}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RenderEdu;
