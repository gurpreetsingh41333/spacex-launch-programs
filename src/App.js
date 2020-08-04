import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Filter />
      </div>
    </div>
  );
};

export default App;
