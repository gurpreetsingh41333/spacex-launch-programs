import React from 'react';

import './Filter.css';
import { filterYears, booleanText } from '../../utils/utils';

export const Filter = () => {
  return (
    <div className="filter-box">
      Filters
      <div className="filter-box-container">
        <div>Launch Year</div>
        <hr className="horizontal-rule" />
        <div className="filter-content">
          {filterYears().map(year => (
            <div className="button-container" key={year}>
              <button className="button-box" type="button">
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
              <button type="button" className="button-box">
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
              <button type="button" className="button-box">
                {text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
