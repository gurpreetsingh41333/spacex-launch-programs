import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDetails.css';

export const LaunchDetails = ({ list, isLandingSuccess }) => {
  return (
    <div className="launch-list">
      <div className="list-container">
        <div className="detail-section">
          <div className="image-body">
            <img src={list.links.mission_patch} className="image" alt="launch-pic" />
          </div>
          <div className="image-title">
            {list.mission_name}#{list.flight_number}
          </div>
        </div>
        <div className="detail-section">
          <label htmlFor="mission_id" className="label-section">
            Mission Ids:{' '}
          </label>
          <ul>
            {list?.mission_id.map(id => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </div>
        <div className="detail-section">
          <label htmlFor="launch_year" className="label-section">
            Launch Year:{' '}
          </label>
          {list.launch_year}
        </div>
        <div className="detail-section">
          <label htmlFor="launch_success" className="label-section">
            Successful Launch:{' '}
          </label>
          <span>{JSON.stringify(list.launch_success)}</span>
        </div>
        <div className="detail-section">
          <label htmlFor="launch_landing" className="label-section">
            Successful Landing:{' '}
          </label>
          {isLandingSuccess && JSON.stringify(isLandingSuccess)}
        </div>
      </div>
    </div>
  );
};

LaunchDetails.propTypes = {
  list: PropTypes.shape({
    flight_number: PropTypes.number,
    links: PropTypes.shape({
      mission_patch: PropTypes.string,
    }),
    mission_name: PropTypes.string,
    mission_id: PropTypes.array,
    launch_year: PropTypes.string,
    launch_success: PropTypes.bool,
    launch_landing: PropTypes.bool,
  }),
  isLandingSuccess: PropTypes.bool,
};

export default LaunchDetails;
