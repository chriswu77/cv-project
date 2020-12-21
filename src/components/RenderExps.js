/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import WorkExpFormEdit from './WorkExpFormEdit';

const RenderExps = (props) => {
  const {
    experiences,
    toggleEditState,
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

  const checkEnd = (month, year) => {
    if (month === '' || year === '') {
      return 'Present';
    }
    return `${month} ${year}`;
  };

  const descriptionBox = (exp) => {
    if (exp.description !== '') {
      return <p className="submitted-line">{exp.description}</p>;
    }
    return '';
  };

  return (
    <div>
      {experiences.map((exp) => {
        const header = `${exp.title}, ${exp.company}`;
        const duration = `${exp.fromMonth} ${exp.fromYear} - ${checkEnd(
          exp.toMonth,
          exp.toYear
        )}`;
        if (exp.editState) {
          return (
            <WorkExpFormEdit
              exp={exp}
              updateTitle={updateTitle}
              title={title}
              updateCompany={updateCompany}
              company={company}
              updateLocation={updateLocation}
              location={location}
              fromMonth={fromMonth}
              updateFromMonth={updateFromMonth}
              fromYear={fromYear}
              updateFromYear={updateFromYear}
              toMonth={toMonth}
              updateToMonth={updateToMonth}
              toYear={toYear}
              updateToYear={updateToYear}
              description={description}
              updateDescription={updateDescription}
              updateState={updateState}
              cancelForm={cancelForm}
              deleteExp={deleteExp}
              titleError={titleError}
              companyError={companyError}
              locationError={locationError}
              fromMonthError={fromMonthError}
              fromYearError={fromYearError}
              key={exp.id}
            />
          );
        }
        return (
          <div key={exp.id} id={exp.id} className="exp-container">
            <div className="exp-header-container">
              <p className="exp-title submitted-line">{header}</p>
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="exp-pencil submitted-line"
                  onClick={toggleEditState}
                />
              </div>
            </div>
            <p className="submitted-line">{exp.location}</p>
            <p className="submitted-line">{duration}</p>
            {descriptionBox(exp)}
          </div>
        );
      })}
    </div>
  );
};

export default RenderExps;
