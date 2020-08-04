import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ApiCall from './middleware/ApiCall';
import { BASE_URL, ERROR_MSG } from './utils/utils';
import LaunchDetails from './components/LaunchDetails/LaunchDetails';

export const App = () => {
  const [launchList, setLaunchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const renderPosts = async () => {
    setLoading(true);
    let launchList = [];
    let errorMsg = '';
    try {
      const fetchInitialData = await ApiCall.getCall(`${BASE_URL}?limit=100`);
      if (fetchInitialData?.status === 200 && fetchInitialData?.data) {
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
    renderPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <Filter />
        <div className="right-pane">
          {errorMsg && <span>{errorMsg}</span>}
          {!loading ? (
            launchList.map(list => {
              return <LaunchDetails list={list} />;
            })
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
