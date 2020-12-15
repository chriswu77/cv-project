/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-named-as-default-member
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
    // edit,
    // isNew,
    updateState,
    cancelForm,
  } = props;

  const checkEnd = (month, year) => {
    if (month === '' || year === '') {
      return 'Present';
    }
    return `${month} ${year}`;
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
              //   edit={edit}
              //   isNew={isNew}
              updateState={updateState}
              cancelForm={cancelForm}
              key={exp.id}
            />
          );
        }
        return (
          <div key={exp.id} id={exp.id} className="exp-container">
            <div className="exp-header-container">
              <p className="exp-title submitted-line">{header}</p>
              <FontAwesomeIcon
                icon={faEdit}
                className="exp-pencil submitted-line"
                onClick={toggleEditState}
              />
            </div>
            <p className="submitted-line">{exp.location}</p>
            <p className="submitted-line">{duration}</p>
            <p className="submitted-line">{exp.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RenderExps;
