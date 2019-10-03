import React from 'react';
import './App.css';
import FeedBack from "./components/FeedBack";
import Setting from "./components/Settings";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="App">
      <Setting />
      <Results />
      <FeedBack />
    </div>
  );
};

export default App;
