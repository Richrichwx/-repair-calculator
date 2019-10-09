import React from 'react';
import './App.css';
import FeedBack from "./components/FeedBack";
import SettingContainer from "./containers/SettingsContainer";
import ResultsContainer from './containers/ResultsContainer';

const App = () => {
  return (
    <div className="App">
      <SettingContainer />
      <ResultsContainer />
      <FeedBack />
    </div>
  );
};

export default App;
