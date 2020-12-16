/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';

const DateBox = (props) => {
  const {
    text,
    fromMonth,
    updateFromMonth,
    fromYear,
    updateFromYear,
    toMonth,
    updateToMonth,
    toYear,
    updateToYear,
  } = props;

  return (
    <div className="date-dbl-container">
      <div className="date-single-container">
        <div className="month-container">
          <label htmlFor="from-month-dropdown">From Month</label>
          <select
            id="from-month-dropdown"
            // defaultValue=""
            value={fromMonth}
            onChange={updateFromMonth}
          >
            <option name="" value="" disabled hidden>
              MM
            </option>
            <option name="January" value="Jan">
              January
            </option>
            <option name="February" value="Feb">
              February
            </option>
            <option name="March" value="Mar">
              March
            </option>
            <option name="April" value="Apr">
              April
            </option>
            <option name="May" value="May">
              May
            </option>
            <option name="June" value="Jun">
              June
            </option>
            <option name="July" value="Jul">
              July
            </option>
            <option name="August" value="Aug">
              August
            </option>
            <option name="September" value="Sep">
              September
            </option>
            <option name="October" value="Oct">
              October
            </option>
            <option name="November" value="Nov">
              November
            </option>
            <option name="December" value="Dec">
              December
            </option>
          </select>
        </div>
        <div className="year-container">
          <label htmlFor="from-year">Year(YYYY)</label>
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="YYYY"
            id="from-year"
            value={fromYear}
            onChange={updateFromYear}
          />
        </div>
      </div>
      <div className="date-single-container">
        <div className="month-container">
          <label htmlFor="to-month-dropdown">To Month</label>
          <select
            id="to-month-dropdown"
            // defaultValue=""
            value={toMonth}
            onChange={updateToMonth}
          >
            <option name="" value="" disabled hidden>
              MM
            </option>
            <option name="January" value="Jan">
              January
            </option>
            <option name="February" value="Feb">
              February
            </option>
            <option name="March" value="Mar">
              March
            </option>
            <option name="April" value="Apr">
              April
            </option>
            <option name="May" value="May">
              May
            </option>
            <option name="June" value="Jun">
              June
            </option>
            <option name="July" value="Jul">
              July
            </option>
            <option name="August" value="Aug">
              August
            </option>
            <option name="September" value="Sep">
              September
            </option>
            <option name="October" value="Oct">
              October
            </option>
            <option name="November" value="Nov">
              November
            </option>
            <option name="December" value="Dec">
              December
            </option>
          </select>
        </div>
        <div className="year-container">
          <label htmlFor="to-year">Year(YYYY)</label>
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="YYYY"
            id="to-year"
            value={toYear}
            onChange={updateToYear}
          />
        </div>
        <p className="notice-text">{text}</p>
      </div>
    </div>
  );
};

export default DateBox;
