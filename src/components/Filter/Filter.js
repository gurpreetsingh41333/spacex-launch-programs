import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';

import { filterYears, booleanText } from '../../utils/utils';

export const Filter = ({ getFilteredList, filterYear, isLaunchSuccess, isLandingSuccess }) => {
  return (
    <div className="filter-box">
      Filters
      <div className="filter-box-container">
        <div>Launch Year</div>
        <hr className="horizontal-rule" />
        <div className="filter-content">
          {filterYears().map(year => (
            <div className="button-container" key={year}>
              <button
                className={`button-box ${filterYear === year && 'active'}`}
                type="button"
                onClick={() => {
                  getFilteredList({ year, launch: isLaunchSuccess, landing: isLandingSuccess });
                }}>
                {year}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-box-container">
        <div>Successful Launch</div>
        <hr className="horizontal-rule" />
        <div className="filter-content">
          {booleanText.map(text => (
            <div className="button-container" key={text}>
              <button
                type="button"
                className={`button-box ${
                  JSON.stringify(isLaunchSuccess).toUpperCase() === text.toUpperCase() && 'active'
                }`}
                onClick={() => {
                  getFilteredList({
                    year: filterYear,
                    launch: text === 'True',
                    landing: isLandingSuccess,
                  });
                }}>
                {text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-box-container">
        <div>Successful Landing</div>
        <hr className="horizontal-rule" />
        <div className="filter-content">
          {booleanText.map(text => (
            <div className="button-container" key={text}>
              <button
                type="button"
                className={`button-box ${
                  JSON.stringify(isLandingSuccess).toUpperCase() === text.toUpperCase() && 'active'
                }`}
                onClick={() => {
                  getFilteredList({
                    year: filterYear,
                    launch: isLaunchSuccess,
                    landing: text === 'True',
                  });
                }}>
                {text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  getFilteredList: PropTypes.func,
  filterYear: PropTypes.number,
  isLaunchSuccess: PropTypes.bool,
  isLandingSuccess: PropTypes.bool,
};

export default Filter;
