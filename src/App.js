import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ApiCall from './middleware/ApiCall';
import { BASE_URL, ERROR_MSG } from './utils/utils';
import LaunchDetails from './components/LaunchDetails/LaunchDetails';
import Footer from './components/Footer/Footer';

export const App = () => {
  const [launchList, setLaunchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [filterYear, setFilterYear] = useState(null);
  const [isLaunchSuccess, setIsLaunchSuccess] = useState(null);
  const [isLandingSuccess, setIsLandingSuccess] = useState(null);

  const renderPosts = async url => {
    setLoading(true);
    let launchList = [];
    let errorMsg = '';
    try {
      const fetchInitialData = await ApiCall.getCall(url);
      if (fetchInitialData?.status === 200 && fetchInitialData?.data.length > 0) {
        launchList = fetchInitialData.data;
      } else errorMsg = ERROR_MSG.NO_RECORD;
    } catch (error) {
      errorMsg = error.message;
    }
    setLaunchList(launchList);
    setLoading(false);
    setErrorMsg(errorMsg);
  };

  useEffect(() => {
    renderPosts(`${BASE_URL}?limit=100`);
  }, []);

  const getFilteredList = async ({ year, launch, landing }) => {
    setFilterYear(year);
    setIsLaunchSuccess(launch);
    setIsLandingSuccess(landing);
    let url = `${BASE_URL}?limit=100`;
    if (launch !== null) url += `&launch_success=${launch}`;
    if (landing !== null) url += `&land_success=${landing}`;
    if (year) url += `&launch_year=${year}`;
    renderPosts(url);
  };

  return (
    <>
      <Helmet key={Math.random()}>
        <title>SpaceX</title>
        <meta property="SSR:title" content="spacex-launch-programs" />
        <meta name="description" content="spacex-launch-programs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://warm-reaches-42627.herokuapp.com/" />
      </Helmet>
      <div>
        <Header />
        <div className="main">
          <Filter
            getFilteredList={getFilteredList}
            filterYear={filterYear}
            isLaunchSuccess={isLaunchSuccess}
            isLandingSuccess={isLandingSuccess}
          />
          <div className="right-pane">
            {!loading && errorMsg && <span>{errorMsg}</span>}
            {!loading ? (
              launchList.map(list => {
                return (
                  <LaunchDetails
                    list={list}
                    isLandingSuccess={isLandingSuccess}
                    key={list.flight_number}
                  />
                );
              })
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default {
  component: App,
};
